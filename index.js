const beli = require('./beli');

const items = [
  { item: 'Milo Shaved Ice', harga: 12000, waktu: 5000},
  { item: 'Rolled Egg', harga: 20000, waktu: 4000},
  { item: 'Ramen', harga: 45000, waktu: 8000},
  { item: 'Iced Cendol', harga: 8000, waktu: 2000},
  { item: 'Batagor', harga: 5000, waktu: 1500},
];

beli(100000, items[0], (change) => {
  beli(change, items[1], (change) => {
    beli(change,items[2], (change) => {
      beli(change, items[3], (change) => {
        beli(change, items[4], (change) => {
          console.log('Saya pulang, saya kenyang');
        });
      });
    });
  });
});