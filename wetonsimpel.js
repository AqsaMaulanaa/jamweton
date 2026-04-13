function tampilkan() {
    const d = new Date();
    
    // Daftar Nama
    const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const pasaran = ["Wage", "Kliwon", "Legi", "Pahing", "Pon"];
    const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    // Hitung Pasaran (Sisa bagi dari total hari)
    let totalHari = Math.floor(d.getTime() / 86400000);
    let sisa = totalHari % 5;

    // Isi ke HTML
    document.getElementById("weton").innerHTML = hari[d.getDay()] + " " + pasaran[sisa];

    document.getElementById("tanggal").innerHTML = d.getDate() + " " + bulan[d.getMonth()] + " " + d.getFullYear();
    
    document.getElementById("jam").innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

// Update tiap detik
setInterval(tampilkan, 1000);
tampilkan();