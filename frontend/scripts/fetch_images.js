async function getWikiImage(title) {
  const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=500`);
  const data = await res.json();
  const pages = data.query.pages;
  const page = Object.values(pages)[0];
  return page.thumbnail ? page.thumbnail.source : null;
}

(async () => {
  const titles = ['Whole_Foods_Market', 'Amazon_Fresh', 'Instacart'];
  const res = {};
  for (const t of titles) {
    try {
      const img = await getWikiImage(t);
      res[t] = img;
      await new Promise(r => setTimeout(r, 1000));
    } catch(e) {}
  }
  console.log(JSON.stringify(res, null, 2));
})();
