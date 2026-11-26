
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

  console.log("Opening website:", url);

  await page.goto(url, {
    waitUntil: "domcontentloaded",
    timeout: 60000
  });

  await page.waitForLoadState("networkidle", {
    timeout: 15000
  }).catch(() => {});

  const screenshotPath = path.join(
    outputDir,
    "website.png"
  );

  await page.screenshot({
    path: screenshotPath,
    fullPage: true
  });

  console.log("Screenshot saved:", screenshotPath);

} finally {
  await browser.close();
}
