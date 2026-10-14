const r = 4;
const pilihan = "luas";
let hasil;

if (pilihan == "luas"){
    hasil = r ** 2 * 3.14;
    console.log(hasil);
}else{
    if(pilihan == "keliling"){
        hasil = 2 * r * 3.14;
        console.log(hasil);
    }
}
