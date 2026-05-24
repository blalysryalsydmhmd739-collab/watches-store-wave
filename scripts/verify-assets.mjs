import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const PUBLIC_PHOTOS = path.join(ROOT, "public", "photos");

/** All filenames referenced by the site */
const required = [
  "pat-taylor-12V36G17IbQ-unsplash.jpg",
  "240_F_513149595_Zsix524ohcvcoyH8bUBrJXu7w7NsGPxG.jpg",
  "photo-1611353229593-16439c293495.avif",
  "photo-1639734012507-ff63ef9d8d3e.avif",
  "photo-1642515839492-a740aa8f6339.avif",
  "photo-1642667049059-04325f205049.avif",
  "photo-1668954226846-f9ec4eed25be.avif",
  "photo-1684766288396-1fd5c7d92112.avif",
  "photo-1687040481503-3595ef7b5672.avif",
  "photo-1691865179028-1729b766a5cd.avif",
  "photo-1694656937152-b2377c0b5de7.avif",
  "photo-1584208124232-7919e0000ad5.avif",
  "photo-1653651460775-7f95d810e40d.avif",
  "photo-1653651461471-d4dffd0e5ab0.avif",
  "photo-1653651461602-97dde5087f58.avif",
  "photo-1657159810148-f6a1f3d74f7e.avif",
  "photo-1657159810382-226b58af626f.avif",
  "photo-1657159811528-acb3c350abd8.avif",
  "premium_photo-1728582543460-1692e08eacbc.avif",
  "premium_photo-1728759440467-d710b7073761.avif",
];

let missing = 0;

for (const file of required) {
  const dest = path.join(PUBLIC_PHOTOS, file);
  const src = path.join(ROOT, "photos", file);
  if (!fs.existsSync(dest) && fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log("Synced:", file);
  }
  if (!fs.existsSync(dest)) {
    console.error("MISSING:", file);
    missing++;
  }
}

if (missing > 0) {
  console.error(`\n${missing} asset(s) missing in public/photos/`);
  process.exit(1);
}

console.log(`\nOK — ${required.length} assets ready for deploy.`);
