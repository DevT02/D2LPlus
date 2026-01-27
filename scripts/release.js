const fs = require("fs");
const path = require("path");
const os = require("os");
const { execFileSync } = require("child_process");

const repoRoot = path.resolve(__dirname, "..");
const buildFiles = [
  "dist",
  "icons",
  "assets",
  "popup.html",
  "popup.css",
  "grades.html",
  "assignments.html",
  "dashboard.css",
  "preview.html",
  "src/lz-string-default.min.js",
  "README.md",
];

function copyInto(targetDir, manifestName) {
  fs.cpSync(path.join(repoRoot, manifestName), path.join(targetDir, "manifest.json"));
  for (const entry of buildFiles) {
    const src = path.join(repoRoot, entry);
    const dest = path.join(targetDir, entry);
    fs.cpSync(src, dest, { recursive: true });
  }
}

function zipDir(sourceDir, outZipPath) {
  execFileSync("zip", ["-r", outZipPath, "."], { cwd: sourceDir, stdio: "inherit" });
}

function makeRelease() {
  const tmpBase = fs.mkdtempSync(path.join(os.tmpdir(), "d2lplus-"));

  const chromeDir = path.join(tmpBase, "chrome");
  fs.mkdirSync(chromeDir);
  copyInto(chromeDir, "manifest.json");
  zipDir(chromeDir, path.join(repoRoot, "D2LPlus-chrome.zip"));

  const firefoxDir = path.join(tmpBase, "firefox");
  fs.mkdirSync(firefoxDir);
  copyInto(firefoxDir, "manifest.firefox.json");
  zipDir(firefoxDir, path.join(repoRoot, "D2LPlus-firefox.zip"));
}

makeRelease();
