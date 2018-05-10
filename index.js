const beli = require ("./beli")

var obj = [{
  item: "tomato",
  harga: 4,
  waktu: 1100
},
{
  item: "cheese",
  harga: 10,
  waktu: 2300
},
{
  item:"fresh bread",
  harga: 7,
  waktu: 1900
},
{
  item: "lettuce",
  harga: 2,
  waktu: 1400
},
{
  item: "mayonnaise",
  harga: 8,
  waktu: 1350
}];


var uang = 35;
var isMinus = false;

beli(uang, obj[0], function(kembalian1){
  if(kembalian1 === 0){
    isMinus = true;
  }
  beli(kembalian1, obj[1], function(kembalian2){
    if(kembalian2 === 0){
      isMinus = true;
    }
    beli(kembalian2, obj[2], function(kembalian3){
      if(kembalian3 === 0){
        isMinus = true;
      }
      beli(kembalian3, obj[3], function(kembalian4){
        if(kembalian4 === 0){
          isMinus = true;
        }
        beli(kembalian4, obj[4], function(trakhir){
          if(trakhir === 0){
            isMinus = true;
          }
          if(isMinus === false){
            console.log("------- Selesai belanja. Let's make a nice sandwich for myself! -------")
          }
          else{
            console.log("------ Let's bring more money next time ------")
          }
        })
      })
    })
  })
})


