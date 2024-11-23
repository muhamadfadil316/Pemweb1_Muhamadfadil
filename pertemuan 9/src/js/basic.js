// soal 1
function hitungLingkaran(){
    var radius = document.getElementById("radius").value;
    if (radius > 0){
        var luas = 3.14 * radius * radius;
        var keliling = 2 * 3.14 * radius;
        document.getElementById("lingkaranOutput").innerText = "Luas: " + luas + "cm², keliling: " + keliling + "cm²";
    }else {
        document.getElementById("lingkaranOutput").innerText = "Masukan Jari-jari yang valid!"
    }
}

// soal 2
function hitungRupiah() {
    var rupiah = document.getElementById("rupiah").value;
    if (rupiah > 0) {
         var dollar = rupiah / 15870;  
         document.getElementById("hasilRupiah").innerText = "Nilai dalam Dollar: $" + dollar.toFixed(2);
    } else {
         document.getElementById("hasilRupiah").innerText = "Masukkan nilai Rupiah yang valid!";
    }
}
// soal 3
function hitungPenjumlahan() {
    var bil1 = parseFloat(document.getElementById("bil1").value) || 0;
    var bil2 = parseFloat(document.getElementById("bil2").value) || 0;
    var jumlah = bil1 + bil2;
    document.getElementById("hasilJumlah").innerText = "Jumlah: " + jumlah.toFixed(2);
}