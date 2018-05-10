const beli = require('./beli.js');

let buah = [{
  item: 'jeruk',
  harga: 5000,
  waktu: 2000,
},{
  item: 'melon',
  harga: 4000,
  waktu: 2500,
},{
  item: 'pisang',
  harga: 3500,
  waktu: 1000,
},{
  item: 'nanas',
  harga: 3000,
  waktu: 1500,
},{
  item: 'stroberi',
  harga: 2000,
  waktu: 1300,
},{
  item: 'apel',
  harga: 1000,
  waktu: 1800,
}];

beli(18500, buah[0], function(sisaUang0) {
  beli(sisaUang0, buah[1], function(sisaUang1) {
    beli(sisaUang1, buah[2], function(sisaUang2) {
      beli(sisaUang2, buah[3], function(sisaUang3) {
        beli(sisaUang3, buah[4], function(sisaUang4) {
          beli(sisaUang4, buah[5], function(sisaUang5) {
            if (sisaUang5 >= 0) {
              console.log('Saya selesai beli buah. Ayo pulang.');
            }
          });
        });
      });
    });
  });
});
