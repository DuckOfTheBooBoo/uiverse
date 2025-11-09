// scripts/sanitize-public-assets.js
import fs from "fs";
import path from "path";

const publicDir = path.resolve("public");

// simple sanitizer: replace spaces with hyphens, trim stray dashes
function sanitizeFilename(name) {
  return name
    .replace(/\s+/g, "-") // spaces → hyphens
    .replace(/-+/g, "-")  // collapse multiple dashes
    .replace(/^-|-$/g, ""); // trim leading/trailing dashes
}

function walkAndRename(dir) {
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkAndRename(fullPath);
      continue;
    }

    const sanitized = sanitizeFilename(file);
    if (sanitized !== file) {
      const newPath = path.join(dir, sanitized);
      fs.renameSync(fullPath, newPath);
      console.log(`Renamed: ${file} → ${sanitized}`);
    }
  }
}

console.log("🧹 Sanitizing /public filenames...");
walkAndRename(publicDir);
console.log("✅ Done — all filenames are whitespace-free!");
