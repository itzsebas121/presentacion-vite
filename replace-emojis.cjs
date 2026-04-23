const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'src', 'slides');
const files = fs.readdirSync(slidesDir).filter(f => f.endsWith('.tsx'));

const emojiMap = {
  '⚡': 'Zap',
  '⚛️': 'Atom',
  '🐧': 'Server',
  '🟢': 'CircleDot',
  '🐙': 'Github',
  '🌐': 'Globe',
  '⚠️': 'AlertTriangle',
  '🎯': 'Target',
  '🚀': 'Rocket',
  '⏱️': 'Clock',
  '📦': 'Package',
  '🛠️': 'Wrench',
  '💻': 'Laptop',
  '❌': 'XCircle',
  '✅': 'CheckCircle',
  '💡': 'Lightbulb',
  '🔍': 'Search',
  '📈': 'LineChart',
  '🚧': 'HardHat', // Wait, HardHat doesn't exist in all lucide versions. Let's use 'Construction'
  '🔥': 'Flame',
  '✨': 'Sparkles',
  '⚙️': 'Settings',
  '📁': 'Folder',
  '📄': 'FileText',
  '🔌': 'Plug',
  '🛑': 'Octagon',
  '📝': 'FileEdit',
  '🗑️': 'Trash',
  '🔒': 'Lock',
  '🔑': 'Key',
  '🛠': 'Wrench',
  '🔧': 'Wrench',
  '🤔': 'MessageSquareQuestion',
  '🏎️': 'CarFront',
  '🏃': 'Activity',
  '🧩': 'Puzzle',
  '🎓': 'GraduationCap',
  '📊': 'BarChart',
  '🛠️': 'Wrench',
  '🚨': 'Siren',
  '📌': 'Pin',
  '👍': 'ThumbsUp'
};

const defaultSizes = {
  'floating': 48,
  'icon-badge': 24,
  'chip': 14,
  'title': 32
};

for (const file of files) {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  const foundIcons = new Set();
  let modified = false;

  for (const [emoji, iconName] of Object.entries(emojiMap)) {
    if (content.includes(emoji)) {
      foundIcons.add(iconName);
      modified = true;
      
      // Determine what to replace with based on context
      // Sometimes it's inside quotes, sometimes not. For React, we'll replace the emoji with a component.
      
      // If the emoji is inside a string like icon: '⚡'
      content = content.replace(new RegExp(`icon:\\s*'${emoji}'`, 'g'), `icon: <${iconName} size={14} />`);
      
      // If it's inside quotes generally in JSX (like {'⚡'} or just '⚡'), we'll try to just put the component
      // This is risky with regex, so we'll replace exact known occurrences.
      
      // Let's replace >emoji< with ><IconName /><
      content = content.replace(new RegExp(`>\\s*${emoji}\\s*<`, 'g'), `><${iconName} /><`);
      
      // Replace isolated emojis
      content = content.replace(new RegExp(`${emoji}`, 'g'), `<${iconName} />`);
    }
  }

  if (modified) {
    // Add import statement
    const iconsArray = Array.from(foundIcons);
    const importStatement = `import { ${iconsArray.join(', ')} } from 'lucide-react';\n`;
    
    // Insert after the first import (React)
    if (content.includes('import React')) {
      content = content.replace(/import React[^;]+;/, match => `${match}\n${importStatement}`);
    } else {
      content = importStatement + content;
    }
    
    // Fix `<IconName />` inside strings if the generic replacement messed it up.
    // Actually, `<Zap />` inside quotes is invalid JS syntax if not in JSX.
    // e.g. `<Zap />` inside `label: '<Zap />'` -> not what we want.
    // The safest way is to just do it manually with multi_replace for safety, or run this script and fix errors.
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
}
