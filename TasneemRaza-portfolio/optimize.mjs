import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = './public';

const files = fs.readdirSync(dir);

async function optimizeImages() {
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      // If image is > 300KB
      if (stat.size > 300 * 1024) {
        console.log(`Optimizing ${file}... (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
        const tempPath = path.join(dir, `temp_${file}`);
        
        try {
            // Determine max width based on filename
            let maxWidth = 1200;
            if (file.startsWith('skill')) {
                maxWidth = 400; // Skill icons don't need to be huge
            } else if (file.startsWith('project')) {
                maxWidth = 1000;
            } else if (file.startsWith('img')) {
                maxWidth = 1000;
            }

            await sharp(filePath)
            .resize({ width: maxWidth, withoutEnlargement: true })
            .png({ compressionLevel: 9, adaptiveFiltering: true, force: true })
            .toFile(tempPath);
            
            fs.renameSync(tempPath, filePath);
            console.log(`Optimized ${file}`);
        } catch (e) {
            console.error(`Failed to optimize ${file}:`, e);
        }
      }
    }
  }
}

optimizeImages().catch(console.error);
