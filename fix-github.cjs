const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'src', 'slides');
const files = fs.readdirSync(slidesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const fp = path.join(slidesDir, file);
  let content = fs.readFileSync(fp, 'utf8');
  if (content.includes('Github')) {
    content = content.replace(/Github/g, 'GitBranch');
    fs.writeFileSync(fp, content);
    console.log('Fixed ' + file);
  }
}
