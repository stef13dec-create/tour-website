const https = require('https');

const titles = [
  'Corvin_Castle',
  'Salina_Turda',
  'Romanian_Athenaeum',
  'Sarma_(food)',
  'Romanian_cuisine',
  'Cărturești_Carusel',
  'Bâlea_Lake'
];

async function getImages() {
  for (const title of titles) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&titles=${encodeURIComponent(title)}&pithumbsize=1000&format=json`;
    await new Promise(resolve => {
      https.get(url, { headers: { 'User-Agent': 'MyBot/1.0' } }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            const json = JSON.parse(data);
            const pages = json.query.pages;
            const pageId = Object.keys(pages)[0];
            if (pages[pageId].thumbnail) {
              console.log(`${title}: ${pages[pageId].thumbnail.source}`);
            } else {
              console.log(`${title}: No image found`);
            }
          } catch (e) {
            console.log(`${title}: Error parsing JSON`);
          }
          resolve();
        });
      }).on('error', () => resolve());
    });
  }
}

getImages();
