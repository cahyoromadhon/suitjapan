// Menangkap Gambar Gunting
// Menambahkan Event
// Ketika di klik akan terjadi sesuatu
// Menyiapkan pilihan komputer
// aturan

function getPilihanBot() {
	const comp = Math.random();
	if (comp < 0.34) return 'batu';
	if (comp >= 0.34 && comp < 0.67) return 'gunting';
	return 'kertas';
}

function getHasil(comp, Cahyo) {
	if (Cahyo == comp) return 'SERI';
	if (Cahyo == 'batu') return (comp == 'gunting') ? 'MENANG' : 'KALAH';
	if (Cahyo == 'gunting') return (comp == 'kertas') ? 'MENANG' : 'KALAH';
	if (Cahyo == 'kertas') return (comp == 'batu') ? 'MENANG' : 'KALAH';
}

const pilihanCahyo = document.querySelectorAll('li img');
pilihanCahyo.forEach(function (pil1) {
	pil1.addEventListener('click', function () {
		const pilihanBot = getPilihanBot();
		const pilihanCahyo = pil1.className;
		const hasil = getHasil(pilihanBot, pilihanCahyo);

		// Ubah Gambar Komputer
		const imgBot = document.querySelector('.img-komputer');
		imgBot.setAttribute('src', pilihanBot + '.jpg');

		// Munculkan Hasil
		const info = document.querySelector('.info');
		info.innerHTML = hasil;
	});
});


// const cBatu = document.querySelector('.batu');
// cBatu.addEventListener('click', function() {
// 	const pilihanBot = getPilihanBot();
// 	const pilihanCahyo = cBatu.className;
// 	const hasil = getHasil(pilihanBot, pilihanCahyo);

// 	// Ubah Gambar Komputer
// 	const imgBot = document.querySelector('.img-komputer');
// 	imgBot.setAttribute('src', 'img/' + pilihanBot + '.jpg');

// 	// Munculkan Hasil
// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// })