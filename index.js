// Belanja 

const beli = require ("./beli.js")

class Rice {
    constructor () {
        this.item = 'rice_box'
        this.harga = 20000  //rp
        this.waktu = 2400 //milisecond
    }
}
let rice = new Rice

class Cola {
    constructor () {
        this.item = 'cola_bottle'
        this.harga = 10000  //rp
        this.waktu = 2300 //milisecond
    }
}
let cola = new Cola ()

class Egg {
    constructor () {
        this.item = 'boiled_egg'
        this.harga = 5000  //rp
        this.waktu = 2200 //milisecond
    }
}
let egg = new Egg ()

class Coffee {
    constructor () {
        this.item = 'coffee_cup'
        this.harga = 3000  //rp
        this.waktu = 2100 //milisecond
    }
}
let coffee = new Coffee () 

class Tofu {

    constructor () {
        this.item = 'fried_tofu'
        this.harga = 1000  //rp
        this.waktu = 2000 //milisecond
    }
}
let tofu = new Tofu

let uang = 50000
let kembalianA

function cb (kembalian) {
    
    kembalianA = kembalian

}

beli(uang, rice, cb) 
beli(uang, cola, cb)
beli(uang, egg, cb)
beli(uang, coffee, cb)
beli(uang, tofu, cb)

