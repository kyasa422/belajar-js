
alert('Selamat datang di game tebak angka');

var tebakan = 0;
var angka = Math.floor(Math.random() * 10 + 1);
var player=0;

while (player < 3) {
    tebakan = parseInt(prompt('tebakan angka 1-10 \n masukkan angka '));
    if (tebakan > 10) {
      alert('anda memasukkan angka yang salah');
    } else {
          if (tebakan === angka) {
            alert('anda benar');
            break;
        } else if (tebakan > angka) {
            alert('tebakan anda terlalu besar');
            player++;
     
        } else if (tebakan < angka) {
            alert('tebakan anda terlalu kecil') + player++;

        } else {
            alert('anda memasukkan angka yang salah');
        }
    }   
}   

if (tebakan != angka) { 
    alert('anda kalah');
}
alert('game selesai');

console.log(angka);