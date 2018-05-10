var beli = require('./beli.js');

let cupcakes = {item : 'cupcakes chocolate',harga : 25000, waktu: 1000};
let cheesecakes = {item : 'cheesecakes',harga : 225000, waktu: 1000};
let chocolatecakes = {item : 'chocolatecakes',harga : 200000, waktu: 1000};
let rainbowcakes = {item : 'rainbowcakes',harga : 215000, waktu: 1000};
let donuts = {item : 'donuts',harga : 15000, waktu: 1000};

beli(100000,cupcakes,function(kembalian){
  beli(kembalian,cheesecakes,function(kembalian){
    beli(kembalian,chocolatecakes,function(kembalian){
      beli(kembalian,rainbowcakes,function(kembalian){
        beli(kembalian,donuts,function(kembalian){
          console.log('-----------------------------');
        })
      })
    })
  })
})
