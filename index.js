const lingkaran = {
    radius: 0,
    keliling: 0,
    luas: 0,
    cekApakahLebihKecilDariNol(){
        if (this.radius < 0){
            this.radius = 0;
        }    
    }, 
    hitungKelilingDanLuas(){
        this.cekApakahLebihKecilDariNol();
        this.keliling = this.radius**2 * 3.14;
        this.luas = this.radius * 2 * 3.14;
    },
    cetakHasil(){
        this.hitungKelilingDanLuas();
        console.log(this.keliling);
        console.log(this.luas)
    }
};

lingkaran.radius = 4;
lingkaran.cetakHasil();
