```mermaid

flowchart LR
    Start((mulai))
    R[/r/]
    Pilihan[/pilihan/]
    CekPilihan{"pilihan == #quot;luas#quot;"}
    HitungLuas[hasil = r * r * 3.14]
    HitungKeliling[hasil = 2 * r * 3.14]
    CetakHasil[/hasil/]
    End(((end)))

    Start --> Pilihan
    Pilihan --> R
    R --> CekPilihan
    CekPilihan --> |yes| HitungLuas
    CekPilihan --> |no| HitungKeliling
    HitungLuas & HitungKeliling --> CetakHasil
    CetakHasil --> End
```
