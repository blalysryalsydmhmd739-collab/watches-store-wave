import sharp from "sharp";
import { mkdir } from "fs/promises";
import path from "path";

const REF = "public/images/homepage-reference.png";
const OUT = "public/images/ref";

/**
 * Calibrated crops for 1370×6398 reference mockup.
 * Re-run: npm run extract-images
 */
const crops = {
  "hero/hero-watch.png": [400, 120, 520, 520],
  "hero/hero-collection.png": [970, 80, 340, 300],
  "hero/hero-portrait.png": [88, 855, 110, 110],
  "hero/hero-watch-face.png": [1075, 815, 230, 230],
  "hero/precision.png": [65, 1520, 630, 600],
  "hero/cta-woman.png": [695, 5260, 610, 740],
  "watches/watch-1.png": [70, 2460, 400, 400],
  "watches/watch-2.png": [485, 2460, 400, 400],
  "watches/watch-3.png": [900, 2460, 400, 400],
  "gallery/gallery-1.png": [70, 3700, 600, 500],
  "gallery/gallery-2.png": [700, 3700, 600, 500],
  "gallery/gallery-3.png": [70, 4210, 600, 500],
  "gallery/gallery-4.png": [700, 4210, 600, 500],
  "avatars/avatar-1.png": [518, 868, 42, 42],
  "avatars/avatar-2.png": [560, 868, 42, 42],
  "avatars/avatar-3.png": [602, 868, 42, 42],
  "avatars/avatar-4.png": [644, 868, 42, 42],
  "avatars/avatar-5.png": [686, 868, 42, 42],
};

async function main() {
  const meta = await sharp(REF).metadata();
  console.log("Reference:", meta.width, "x", meta.height);

  for (const dir of ["hero", "watches", "gallery", "avatars"]) {
    await mkdir(path.join(OUT, dir), { recursive: true });
  }

  for (const [rel, box] of Object.entries(crops)) {
    const [left, top, width, height] = box;
    const dest = path.join(OUT, rel.replace(".png", ".jpg"));
    await sharp(REF)
      .extract({ left, top, width, height })
      .jpeg({ quality: 93 })
      .toFile(dest);
    console.log("✓", path.basename(dest));
  }
}

main().catch(console.error);
