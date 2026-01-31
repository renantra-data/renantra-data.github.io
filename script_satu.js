function showPage(id) {
  // sembunyikan semua
  document.getElementById("home").style.display = "none";
  document.getElementById("project").style.display = "none";
  document.getElementById("about").style.display = "none";

  // tampilkan yang dipilih
  document.getElementById(id).style.display = "block";
}

// tampilkan halaman awal
showPage("home");