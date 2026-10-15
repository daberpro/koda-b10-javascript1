const obj = {
    radius: 0,
    keliling: 0,
    luas: 0
};

function cekApakahLebihKecilDariNol(l){
    if(l.radius < 0){
        l.radius = 0;
    }
}

function hitungLuasDanKeliling(l,cek_r){
    cek_r(l);
    l.keliling = l.radius**2 * 3.14;
    l.luas = l.radius * 2 * 3.14;
}

function tampilkanKelilingDanLuasLingkaran(lingkaran, hitung_fn){
    hitung_fn(lingkaran, cekApakahLebihKecilDariNol);
    const { keliling, luas } = lingkaran;
    console.log(keliling);
    console.log(luas);
}

obj.radius = 4;
tampilkanKelilingDanLuasLingkaran(obj, hitungLuasDanKeliling);
