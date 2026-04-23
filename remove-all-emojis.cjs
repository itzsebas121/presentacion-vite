const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'src', 'slides');
const files = fs.readdirSync(slidesDir).filter(f => f.endsWith('.tsx'));

const emojiMap = {
  '⏳': 'Hourglass',
  '🐌': 'Snail',
  '⛔': 'Ban',
  '🌍': 'Globe',
  '✓': 'Check',
  '➜': 'ArrowRight',
  '🔄': 'RefreshCw',
  '🛡': 'Shield',
  '🛡️': 'Shield',
  '💾': 'Save',
  '🏠': 'Home',
  '🎨': 'Palette',
  '🖼': 'Image',
  '🖼️': 'Image',
  '📋': 'Clipboard',
  '🎉': 'PartyPopper',
  '📥': 'Inbox',
  '✏': 'Pencil',
  '✏️': 'Pencil',
  '🔗': 'Link',
  '✗': 'X',
  '🎤': 'Mic',
  '🙋': 'Hand',
  '🗜️': 'Minimize',
  '✂️': 'Scissors',
  '🐛': 'Bug'
};

for (const file of files) {
  const fp = path.join(slidesDir, file);
  let content = fs.readFileSync(fp, 'utf8');
  let modified = false;
  const foundIcons = new Set();

  for (const [emoji, iconName] of Object.entries(emojiMap)) {
    if (content.includes(emoji)) {
      foundIcons.add(iconName);
      modified = true;
      
      // Replace emoji in strings (arrays, mappings)
      content = content.replace(new RegExp(`icon:\\s*'${emoji}\\s*'`, 'g'), `icon: <${iconName} size={14} />`);
      content = content.replace(new RegExp(`icon:\\s*'${emoji}'`, 'g'), `icon: <${iconName} size={14} />`);
      
      // Replace >emoji< with ><IconName /><
      content = content.replace(new RegExp(`>\\s*${emoji}\\s*<`, 'g'), `><${iconName} size={14} /><`);
      
      // Fallback: replace isolated emojis with <IconName />
      content = content.replace(new RegExp(emoji, 'g'), `<${iconName} size={14} />`);
    }
  }

  if (modified) {
    // Add import statement
    const iconsArray = Array.from(foundIcons);
    const importStatement = `import { ${iconsArray.join(', ')} } from 'lucide-react';\n`;
    
    // Check if lucide-react is already imported
    if (content.includes("'lucide-react'")) {
      // It has an existing import from lucide-react. Let's merge them.
      // This is simpler: just append the new imports if they don't exist
      // Since it's tricky to parse, we can just add a new import line for the new icons. 
      // It's totally valid JS to have multiple imports from the same module.
      content = content.replace(/import React[^;]+;/, match => `${match}\n${importStatement}`);
    } else if (content.includes('import React')) {
      content = content.replace(/import React[^;]+;/, match => `${match}\n${importStatement}`);
    } else {
      content = importStatement + content;
    }
    
    // Clean up potentially corrupted strings like 'Text <IconName size={14} /> Text'
    // To do this properly, we need to find them and convert the string into a fragment or array.
    // E.g., `content: 'Hola, Vite <Zap />'` -> `content: <>Hola, Vite <Zap /></>`
    // E.g. `{['<Check size={14} /> built in', ...`
    
    // We'll write to file first, and we can manually fix syntax errors if tsc fails.
    fs.writeFileSync(fp, content, 'utf8');
    console.log('Fixed ' + file);
  }
}
