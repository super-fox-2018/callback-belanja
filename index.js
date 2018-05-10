var beli = require("./beli.js")


class Barang {
	constructor(item,harga,waktu) {
		this.item = item
		this.harga = harga
		this.waktu = waktu
	}
}

class Sepatu extends Barang{
	constructor() {
		super("Sepatu",10000,1000)
	}
}

class Baju extends Barang{
	constructor() {
		super("Baju",15000,5000)
	}
}	

class Sandal extends Barang{
	constructor() {
		super("Sandal",20000,3000)
	}
}

class Minuman extends Barang{
	constructor() {
		super("Minuman",2000,3000)
	}
}

class Makanan extends Barang{
	constructor() {
		super("Makanan",200000,3000)
	}
}	

var sepatu = new Sepatu()
var baju = new Baju()
var sandal = new Sandal()
var makanan = new Makanan()
var minuman = new Minuman()

beli(2000000,sepatu,function(kembalian) {
	beli(kembalian,baju,function(kembalian) {
		beli(kembalian,sandal,function(kembalian) {
			beli(kembalian,makanan,function(kembalian) {
				beli(kembalian,minuman,function(kembalian){
					7
				})
			})
		})
	})
})