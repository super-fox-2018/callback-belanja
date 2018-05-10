const beli = require('./beli.js')


let Rokok = {item:'Rokok Sampoerna Mild',harga:22000,waktu:5000}
let Beer = {item:'Beer Proost',harga:25000,waktu:5000}
let Liquer = {item:'Liquer Grey Ghoost',harga:1200000,waktu:5000}
let TiketPesawat = {item:'Tiket pesawat ke Raja Ampat', harga:3500000, waktu:5000}
let Koper = {item:'Koper merk Polo',harga:1100000,waktu:5000}

beli(10000000,Rokok,function(hedon){
    beli(hedon,Beer,function(hedon){
        beli(hedon,Liquer,function(hedon){
            beli(hedon,TiketPesawat,function(hedon){
                beli(hedon,Koper,function(hedon){
                    console.log('Masih sisa, beli apa lagi yak??')
                })
            })
        })
    })
})
