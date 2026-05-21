import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('./public');
const assetsDir = path.resolve('./src/assets');

const images = [
  { dir: publicDir, name: 'project-tiptop.png', width: 800 },
  { dir: publicDir, name: 'project-borrowbuddy.png', width: 800 },
  { dir: publicDir, name: 'project-whatsapp.png', width: 800 },
  { dir: assetsDir, name: 'prem_photo.jpeg', width: 600 }
];

async function optimize() {
  for (const img of images) {
    const inputPath = path.join(img.dir, img.name);
    const parsed = path.parse(inputPath);
    const outputPath = path.join(img.dir, `${parsed.name}.webp`);

    if (fs.existsSync(inputPath)) {
      console.log(`Optimizing ${inputPath}...`);
      await sharp(inputPath)
        .resize({ width: img.width, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Created ${outputPath}`);
      // Optional: Delete the original to save space, but we'll keep it just in case, or we can just let it be and use .webp in code.
    } else {
      console.log(`File not found: ${inputPath}`);
    }
  }
}

optimize().catch(console.error);
