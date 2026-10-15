const lingkaran = {
    radius: 0,
    keliling: 0,
    luas: 0,
    cekApakahLebihKecilDariNol(){
        if (this.radius < 0){
            this.radius = 0;
        }    
    }, 
    HitungKelilingDanLuas(){
        this.cekApakahLebihKecilDariNol();
        this.keliling = this.radius**2 * 3.14;
        this.luas = this.radius * 2 * 3.14;
    },
    CetakHasil(){
        this.HitungKelilingDanLuas();
        console.log(this.keliling);
        console.log(this.luas)
    }
};

lingkaran.radius = 4;
lingkaran.CetakHasil();
