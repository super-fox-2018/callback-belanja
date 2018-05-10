const beli = require('./beli')
class Jajanan {
    constructor(name, harga, waktu) {
        this.item = name
        this.harga = harga
        this.waktu = waktu
    }
}

let kacang = new Jajanan('kacang', 1000, 1000)
let kueCubit = new Jajanan('kue cubit', 1500, 1000)
let gorengan = new Jajanan('gorengan', 2000, 1000)
let lemper = new Jajanan('lemper', 3000, 1000)
let pastel = new Jajanan('pastel', 4000, 1000)

let uang = 12000;

beli(uang, pastel, function (kembalian) {
    if (kembalian > 0) {
        beli(kembalian, lemper, function (kembalian) {
            if (kembalian > 0) {
                beli(kembalian, gorengan, function (kembalian) {
                    if (kembalian > 0) {
                        beli(kembalian, kueCubit, function (kembalian) {
                            if (kembalian > 0) {
                                beli(kembalian, kacang, function (kembalian) {
                                    console.log("belanja selesai")
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})