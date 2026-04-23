const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'src', 'slides');
const files = fs.readdirSync(slidesDir).filter(f => f.endsWith('.tsx'));

const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA70}-\u{1FAFF}]|[\u{2300}-\u{23FF}]/gu;

for (const file of files) {
  const fp = path.join(slidesDir, file);
  const content = fs.readFileSync(fp, 'utf8');
  const matches = content.match(emojiRegex);
  if (matches) {
    console.log(`File: ${file}`);
    console.log(`Emojis found: ${[...new Set(matches)].join(' ')}`);
  }
}
