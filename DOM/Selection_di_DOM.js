// DOM selection
// 1. menggunakan ID dan ini mengembalikan -> Element 
const Heading = document.getElementById('judul');
Heading.innerHTML = 'AGUS SETIAWAN';
Heading.style.color = 'black';
Heading.style.backgroundColor = 'grey';

// 2. menggunakan tagName()   Mengembalikan -> HTML Collection
const indentifikasi_p = document.getElementsByTagName('p');
indentifikasi_p[0].style.borderColor = 'red';
    // implementasi for 
for (i = 0; i < indentifikasi_p.length; i++) { 
    indentifikasi_p[i].style.color = 'green';
}

let h = document.getElementsByTagName('a')[0];
h.innerHTML = 'Belajar Sampe kelar';


// 3.Menggunakan class mengembalikan -> HTML collection
const p3 =document.getElementsByClassName('p3');
p3[0].innerHTML = 'Aku adalah seorang programer';

// 4. menggunakan querrySelector ->Element
let p4 = document.querySelector('#b p');
p4.style.color = 'red';

let li2 = document.querySelector('#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// 5. menggunakan querrySelectorAll -> HTML collection
    // 