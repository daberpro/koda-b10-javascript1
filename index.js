const r = 4;

function hitungKelilingAndLuas(r){
    if (r < 0){
        return {
            luas: 0,
            keliling: 0
        };
    }

    const keliling = r**2 * 3.14;
    const luas = r * 2 * 3.14;

    return {
        luas,
        keliling
    };
}

const {luas, keliling} = hitungKelilingAndLuas(r);
console.log(keliling);
console.log(luas);
