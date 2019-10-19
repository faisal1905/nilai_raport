var nama, nim, jumlah_hadir, tugas, uts, uas, nilai_total, grade;

nama = "Lucinta";
nim = 696969
jumlah_hadir = 14;
tugas = 80;
uts = 0;
uas = 100;

nilai_total = jumlah_hadir*10/100 + tugas*20/100 + uts*30/100 + uas*40/100;

if(jumlah_hadir == 0 || tugas == 0 || uts == 0 || uas == 0){
    grade = "E"
}else {
    
    if(nilai_total > 80){
        grade = "A";
    }else if(nilai_total >= 71 && nilai_total <= 79){
        grade = "B"
    }else if(nilai_total >= 61 && nilai_total <= 70){
        grade = "C"
    }else if(nilai_total >= 50 && nilai_total <= 60){
        grade = "D"
    }else if(nilai_total < 50){
        grade = "E"
    }
}

console.log("Nama :" + nama);
console.log("NIM :" +nim);
console.log("Nilai :" + grade);