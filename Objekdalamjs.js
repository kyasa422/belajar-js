// Membuat Objek dalam JavaScript

// 1.Literal
var mhs = { 
    nama: 'agus setiawan',
    nim: 2107411013,
    email: 'hyenseok422@gmail.com',
    jurusan : 'Membuat anak'


}

console.log(mhs);
console.log("hello word");

//2. Declaration Objek

function MembuatObjekMahasiswa(nama,nim,jurusan) { 
    var mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.nim = nim;
    mahasiswa.jurusan = jurusan;
    return mahasiswa;
}
var mhs1 = MembuatObjekMahasiswa('mahmud', 2107411013, 'Dukun');
console.log(mhs1);

//3. Constructor