function tambah() { 
    var hasil = 1;
    for (var i = 0; i < arguments.length; i++) {
        hasil *= arguments[i];
        
    }
    return hasil;
}
console.log(tambah(1,2,3,4,5));