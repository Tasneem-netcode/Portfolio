import fs from 'fs';
import path from 'path';

const dir = './src/components';
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.jsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('loading="lazy"')) {
        content = content.replace(/loading="lazy"/g, 'loading="eager"');
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${file}`);
    }
  }
}
