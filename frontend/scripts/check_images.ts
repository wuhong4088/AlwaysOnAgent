import fs from 'fs';
const content = fs.readFileSync('scripts/seed.ts', 'utf8');
const urls = content.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+\?w=400&auto=format&fit=crop/g) || [];
const uniqueUrls = [...new Set(urls)];

async function check() {
  for (const url of uniqueUrls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      console.log(res.status, url);
    } catch(e) {
      console.log('Error', url);
    }
  }
}
check();
