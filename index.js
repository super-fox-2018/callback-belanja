const beli = require('./beli');

class Item {
  constructor(item, harga, waktu) {
    this.item = item;
    this.harga = harga;
    this.waktu = waktu;
  }
}

const miloShavedIce = new Item('Milo Shaved Ice', 12000, 5000);
const rolledEgg = new Item('Rolled Egg', 20000, 4000);
const ramen = new Item('Ramen', 45000, 8000);
const icedCendol = new Item('Iced Cendol', 8000, 2000);
const batagor = new Item('Batagor', 5000, 1500);

const startingMoney = 100000;

beli(startingMoney, miloShavedIce, (change) => {
  beli(change, rolledEgg, (change) => {
    beli(change,ramen, (change) => {
      beli(change, icedCendol, (change) => {
        beli(change, batagor, (change) => {
          console.log('Saya pulang, saya kenyang');
        });
      });
    });
  });
});