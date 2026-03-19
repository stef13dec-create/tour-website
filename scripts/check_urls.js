const https = require('https');

const url = 'https://upload.wikimedia.org/wikipedia/commons/8/81/Peles_Castle_in_winter.jpg';

https.request(url, { 
  method: 'HEAD',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
}, (res) => {
  console.log(`${res.statusCode} - ${url}`);
}).end();
