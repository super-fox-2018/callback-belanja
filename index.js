const beli = require('./beli.js')

let uang = 5000000


let Roti = {
  item: 'Roti',
  harga: 16000,
  waktu: 3000
}
let Royco = {
  item: 'Royco',
  harga: 1000,
  waktu: 500
}
let TisuBasah = {
  item: 'Tissue Basah',
  harga: 26000,
  waktu: 1000
}
let Teflon = {
  item: 'Teflon Anti Lengket',
  harga: 410000,
  waktu: 1000
}
let Adidas = {
  item: 'Adidas NMD',
  harga: 3000000,
  waktu: 1900
}



beli(uang, Adidas, function Sisa(sisa) {
  if (sisa > 0)
    beli(sisa, Teflon, function Sisa(sisa) {
      if (sisa > 0)
        beli(sisa, TisuBasah, function Sisa(sisa) {
          if (sisa > 0)
            beli(sisa, Royco, function Sisa(sisa) {
              if (sisa > 0)
                beli(sisa, Roti, function Sisa(sisa) {
                  console.log('Done.')
                })

            })

        })

    })

})
