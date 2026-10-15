### Penjelasan kode JS
saya membuat variabel lingkaran yang miliki properti radius, keliling, dan luas, kemudian ada 3 method yakni cekApakahLebihKecilDariNol, HitungKelilingDanLuas, dan CetakHasil
kemudian untuk mengubah nilai radius cukup reassign nilai property radius, kemudian panggil method CetakHasil kembali, ketika method CetakHasil atau HitungKelilingDanLuas dipanggil
maka nilai properti keliling dan luas juga akan diupdate

```mermaid

flowchart LR
    Start((mulai))
    R[/r/]
    CekApakahNegatif{r < 0}
    HitungLuas[keliling = r * r * 3.14]
    HitungKeliling[luas = 2 * r * 3.14]
    CetakKeliling[/keliling/]
    CetakLuas[/luas/]
    SetRNol[r = 0]
    End(((end)))

    Start --> R 
    R --> CekApakahNegatif
    CekApakahNegatif --> |yes| SetRNol
    CekApakahNegatif --> |no| HitungLuas
    HitungLuas --> HitungKeliling
    SetRNol --> HitungLuas
    HitungKeliling --> CetakLuas 
    CetakLuas --> CetakKeliling
    CetakKeliling --> End


```
