let r = 4;
if(r < 0){
    r = 0;
}

// impure function karena mengakses r dari luar fungsi
function HitungKeliling(){
    return r**2 * 3.14;
}

// pure function hanya mengakses data melalui parameter
function HitungLuas(r) {
    return r * 2 * 3.14;
}


const keliling = HitungKeliling();
const luas = HitungLuas(r);

console.log(keliling);
console.log(luas);
