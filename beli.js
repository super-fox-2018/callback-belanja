
function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
      cb(0)
    }
  }, obj.waktu);
}

module.exports = beli;


// uang = jumlah uang yang dibawa belanja
// obj item =
    // item string = nama barang yang akan dibeli
    // item number = harga dari barang yang akan dibeli
    // waktu = number dalam milisecond / perkiraan waktu beli  cth 5000 => 5 detik
// callback  menerima 1 param kembalian proses belanja
// test proses belanja 5 kali
   // beli permen
   //beli roti
   //beli susu
   //beli kopi
//beli teh
