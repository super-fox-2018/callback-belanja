// 5 time callback?
// callback -> terima 1 parameter kembalian dari proses belanja

const beli = require('./beli.js');

class Food {
  constructor(item, harga, waktu) {
    this._item = item;
    this._harga = harga;
    this._waktu = waktu;
  }
  get item() { return this._item }
  get harga() { return this._harga }
  get waktu() { return this._waktu }
}

let nasi = new Food('nasi', 2000, 5000);
let bubur = new Food('bubur', 10000, 6000);
let indomie = new Food('indomie', 5000, 1000);
let ayamGeprek = new Food('ayam geprek', 25000, 10000);
let lele = new Food('lele', 15000, 3000);

beli(100000, nasi, function(kembalian){
  beli(kembalian, ayamGeprek, function(kembalian) {
    beli(kembalian, indomie, function(kembalian) {
      beli(kembalian, bubur, function(kembalian) {
        beli(kembalian, lele, function(kembalian) {
          console.log('index.js ---> finished')
        })
      })
    })
    
  })
})