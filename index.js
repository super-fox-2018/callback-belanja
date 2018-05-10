'use strict'
const beli = require('./beli.js')


let susu = {item:'Indomilek',harga:15000,waktu:3000}
let oatmeal = {item:'Havermut',harga:35000,waktu:5000}
let sereal = {item:'Koko Kranceh',harga:20000,waktu:2500}
let miInstan = {item:'Indo emi', harga:2500, waktu:1700}
let mentega = {item:'Bluben',harga:30000,waktu:2500}

beli(150000,susu,function(beliLagi){
    beli(beliLagi,oatmeal,function(beliLagi1){
        beli(beliLagi1,sereal,function(beliLagi2){
            beli(beliLagi2,miInstan,function(beliLagi3){
                beli(beliLagi3,mentega,function(selesai){
                    console.log('dan selesai sudah penderitaan saya!')
                })
            })
        })
    })
})