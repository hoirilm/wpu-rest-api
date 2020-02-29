// object ke json

// let mahasiswa = {
//     nama: "Hoiril Mochtar",
//     nrp: "150411100042",
//     email: "hoiril.mo@gmail.com"
// }

// console.log(JSON.stringify(mahasiswa)); //merubah object jadi json

// ==============================================================

// json ke object (vanilla jacascript / manual)

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4 && xhr.status == 200) {
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }

// xhr.open('GET', 'coba.json', true);
// xhr.send();

// ==============================================================

// json ke object (jquery / ajax)

$.getJSON('coba.json', function(data){
    console.log(data);
})