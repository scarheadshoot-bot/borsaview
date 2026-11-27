
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const url = process.env.SITE_URL || process.argv[2];

if (!url) {
  throw new Error("SITE_URL is not configured");
}

const outputDir = path.resolve("screenshots");
fs.mkdirSync(outputDir, { recursive: true });

const browser = await chromium.launch({
  headless: true
});

try {
  const page = await browser.newPage({
    viewport: {
      width: 1440,
      height: 1000
    },
    deviceScaleFactor: 1
  });

  page.on("pageerror", error => {
    console.error("PAGE ERROR:", error.message);
  });

  page.on("console", message => {
    if (message.type() === "error") {
      console.error("CONSOLE ERROR:", message.text());
    }
  });

  console.log("Opening website:", url);

  const response = await page.goto(url, {
    waitUntil: "domcontentloaded",
    timeout: 60000
  });

  console.log("HTTP status:", response?.status());
  console.log("Final URL:", page.url());

  await page.locator("body").waitFor({
    state: "visible",
    timeout: 30000
  });

  await page.waitForLoadState("networkidle", {
    timeout: 20000
  }).catch(() => {
    console.log("Network did not become idle.");
  });

  await page.evaluate(async () => {
    await document.fonts.ready;
  });

  await page.waitForTimeout(3000);

  const pageInfo = await page.evaluate(() => ({
    title: document.title,
    text: document.body.innerText.slice(0, 1500),
    width: document.documentElement.scrollWidth,
    height: document.documentElement.scrollHeight,
    background: getComputedStyle(document.body).backgroundColor
  }));

  console.log("PAGE INFO:", JSON.stringify(pageInfo, null, 2));

  if (!pageInfo.text.trim()) {
    throw new Error(
      "Website appears empty. Screenshot was not published."
    );
  }

  const screenshotPath = path.join(
    outputDir,
    "website.png"
  );

  await page.screenshot({
    path: screenshotPath,
    fullPage: true,
    animations: "disabled",
    type: "png"
  });

  console.log("Screenshot saved:", screenshotPath);

} finally {
  await browser.close();
}
