

document.getElementById('aku').innerHTML = 'Hello World';
document.getElementById('aku').style.color = 'grey';
var angkotmurah = 1;
let angkotoperasi = 7;
let jumlahangkot = 10;


while (angkotmurah <= angkotoperasi) {
    console.log('angkot No. ' + angkotmurah + ' beroperasi dengan baik');
    angkotmurah++;

}
for (i = angkotmurah; i <= jumlahangkot; i++) {
    console.log('angkot No. ' + i + ' sedang tidak beroperasi');
}


var test =parseInt( prompt('masukkan angka'));

switch (test) { 
    case 1:
        alert('anda memasukkan angka 1');
        break;
    case 2:
        alert('anda memasukkan angka 2');
        break;
    case 3:
        alert('anda memasukkan angka 3');
        break;
    default:
        alert('anda memasukkan angka yang salah');
        break;
}