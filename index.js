let r = 4;
// pure function
function cekApakahLebihKecilDariNol(radius){
    if (radius < 0){
        return 0;
    }
    return radius;
}

// impure function
function HitungKelilingDanLuas(){
    r = cekApakahLebihKecilDariNol(r);
    const keliling = r**2 * 3.14;
    const luas = r * 2 * 3.14;
    return [
        keliling,
        luas
    ];
}

const [keliling, luas] = HitungKelilingDanLuas(r);
console.log(keliling);
console.log(luas);
