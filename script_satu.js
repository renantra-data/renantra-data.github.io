/* Tunggu hingga DOM siap sebelum mencari elemen dan menambahkan event listener */
document.addEventListener('DOMContentLoaded', function(){
	// Ambil tombol toggle dan elemen navigasi berdasarkan ID
	const toggle = document.getElementById('nav-toggle');
	const nav = document.getElementById('site-nav');

	// Jika salah satu elemen tidak ditemukan, hentikan agar tidak terjadi error
	if(!toggle || !nav) return;

	// Saat tombol diklik, tambahkan/hapus kelas 'open' pada navigasi
	// CSS akan menampilkan menu ketika kelas ini ada (untuk tampilan mobile)
	toggle.addEventListener('click', function(){
		nav.classList.toggle('open');
	});
});

