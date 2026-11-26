import { chromium } from "playwright";
import { spawn } from "node:child_process";
import fs from "node:fs";

const server = spawn("npm", ["run", "start"], { stdio: "inherit" });

async function waitForServer() {
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch("http://localhost:3000/ar");
      if (res.ok) return;
    } catch {
      // الخادم لم يبدأ بعد
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }
  throw new Error("Server did not start");
}

try {
  await waitForServer();
  fs.mkdirSync("shots", { recursive: true });

  const pages = [
    ["ar-home", "/ar"],
    ["en-home", "/en"],
  ];
  const sizes = {
    mobile: { width: 390, height: 844 },
    desktop: { width: 1280, height: 800 },
  };

  const browser = await chromium.launch();
  for (const [name, path] of pages) {
    for (const [label, viewport] of Object.entries(sizes)) {
      const page = await browser.newPage({ viewport });
      await page.goto("http://localhost:3000" + path, { waitUntil: "networkidle" });
      await page.waitForTimeout(1500);
      await page.screenshot({ path: "shots/" + name + "-" + label + ".png", fullPage: true });
      await page.close();
    }
  }
  await browser.close();
} finally {
  server.kill();
}