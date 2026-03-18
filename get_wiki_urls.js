const crypto = require('crypto');

const filenames = [
  'Peles_Castle_in_winter.jpg',
  'Bucharest_-_Palace_of_the_Parliament_(28695844810).jpg',
  'Castelul_Bran_2019.jpg',
  'Transfagarasan_Highway_in_Romania.jpg',
  'Sibiu_-_Piata_Mare.jpg',
  'Brasov_Council_Square.jpg',
  'Sighisoara_-_Clock_Tower.jpg',
  'Sarmale_in_oala_de_lut.jpg',
  'Danube_Delta_-_Pelicans.jpg',
  'Bucegi_Mountains_-_Caraiman_Peak.jpg',
  'Romanian_Athenaeum_Bucharest.jpg',
  'Corvin_Castle_in_Hunedoara.jpg',
  'Salina_Turda_-_Main_hall.jpg',
  'Balea_Lake_Romania.jpg'
];

filenames.forEach(filename => {
  const hash = crypto.createHash('md5').update(filename).digest('hex');
  const a = hash.substring(0, 1);
  const ab = hash.substring(0, 2);
  console.log(`https://upload.wikimedia.org/wikipedia/commons/${a}/${ab}/${filename}`);
});
