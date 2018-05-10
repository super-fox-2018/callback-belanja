let beli = require('./beli.js');

class Obj{
    constructor(item, harga, waktu){
        this.item = item;
        this.harga = harga;
        this.waktu = waktu;
    }
}

var susu = new Obj('susu', 5000, 3600);
console.log(susu);

var beras = new Obj('beras', 10000, 2000);
console.log(beras);

var indomie = new Obj('indomie', 2000, 4800);
console.log(indomie);

var bodrex = new Obj('bodrex', 500, 500);
console.log(indomie);

var promag = new Obj('promag', 500, 600);
console.log(indomie);

let uang = 50000;


beli(uang,susu,function(kembalian){
      beli(kembalian,beras,function(kembalian){
        beli(kembalian,indomie,function(kembalian){
          beli(kembalian,bodrex,function(kembalian){
            beli(kembalian,promag,function(kembalian){
              console.log('selesai belanja');
            })
          })
        })
      })
    })



