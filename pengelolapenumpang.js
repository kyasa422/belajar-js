var penumpangAngkot = [];    
let menambahlagi = true;
let memilih;
function home() {
    let pilihan =parseInt(prompt(" Pilih tindakan \n 1.menambah penumpang \n 2.Penumpang keluar \n 3.exit"));
    if (pilihan === null) { 
        menambahlagi = false;
    }
    switch (pilihan) { 
        case 1:
            penumpang();
            break;
        case 2:
            keluarpenumpang();
            break;
        case 3:
            alert("Terimaksih kakak :) ");
            menambahlagi = false;
            break;
            
        default:
            menambahlagi = false;
            break;
    }
    console.log(pilihan);
}


function penumpang() {
    
    if (penumpangAngkot.length == 0) {
        
        
        var namaPenumpang = prompt("what is your name");

        penumpangAngkot.push(namaPenumpang);
        
        menambahlagi = confirm("mau menambah penumpang lagi");
        // if (menambahlagi) {
        //     penumpang();
        // } else {

            penumpangAngkot.forEach(function (e, i) {
                console.log("Penumpang ke - " + (i + 1) + "dengan nama " + e)
            });
        
        //     home();
        // }
    }

    else { 
         var namaPenumpang = prompt("what is your name");
            
        penumpangAngkot.push(namaPenumpang);
            

        // for (var i = 0; i < penumpangAngkot.length; i++) {
            
        //     if (penumpangAngkot[i] == namaPenumpang) {
        //         console.log("nama sudah tersedia");
        //         home();
                
         
        //     } else { 
        //              menambahlagi = confirm("mau menambah penumpang lagi");
        // while (menambahlagi) {
        //     penumpang();
        // }
        //     }
        // }
            //      if (penumpangAngkot[i] == undefined) {
            //          penumpangAngkot[i] = namaPenumpang;
            //          menambahlagi = confirm("mau menambah penumpang lagi");
            //          while (menambahlagi) {
            //              penumpang();
            //          }
                 
                //     } else if (penumpangAngkot[i]==penumpangAngkot[i]) {
                //      penumpangAngkot.splice(penumpangAngkot[i] == penumpangAngkot[i], 1);
                        
                //     }
                // }
        menambahlagi = confirm("mau menambah penumpang lagi");
        // while (menambahlagi) {
        //     penumpang();
        // }
   
         console.clear();
        penumpangAngkot.forEach(function (e, i) {
        
            console.log("Penumpang ke - " + (i + 1) + "dengan nama " + e)
        });
    
        // home();
        }
}


    function keluarpenumpang()
        { 
                let menghapus = parseInt(prompt("nomor urut berapa yang keluar"));

                penumpangAngkot.splice(menghapus-1,1);
                    console.clear();
                    penumpangAngkot.forEach(function (e, i) {
                        console.log("Penumpang ke - " + (i + 1) + "dengan nama " + e)
                    
                    });
        
                menambahlagi = confirm("mau keluar lagi");
                //     while (menambahlagi)
                // {
                //     keluarpenumpang();
                // }
                // home();
               
}




while (menambahlagi) { 
    home();
    
} 







