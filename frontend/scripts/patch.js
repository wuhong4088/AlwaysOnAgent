const fs = require('fs');
let code = fs.readFileSync('src/i18n.ts', 'utf8');

function replaceSection(code, sectionName, content) {
    const startRegex = new RegExp(`\\s+${sectionName}:\\s*\\{[\\s\\S]*?\\n\\s{4}\\},?`, 'g');
    // regex can't easily match nested braces.
}
