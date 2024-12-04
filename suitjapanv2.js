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

function putar() {
	const imgComputer = document.querySelector('.img-komputer');
	const gambar = ['batu', 'gunting', 'kertas'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function () {
		if (new Date().getTime() - waktuMulai > 1000) {
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.jpg');
		if (i == gambar.length) i = 0;
	}, 100)
}

const pilihanCahyo = document.querySelectorAll('li img');
pilihanCahyo.forEach(function (pil1) {
	pil1.addEventListener('click', function () {
		const pilihanBot = getPilihanBot();
		const pilihanCahyo = pil1.className;
		const hasil = getHasil(pilihanBot, pilihanCahyo);

		putar()

		setTimeout(function () {
			// Ubah Gambar Komputer
			const imgBot = document.querySelector('.img-komputer');
			imgBot.setAttribute('src', 'img/' + pilihanBot + '.jpg');

			// Munculkan Hasil
			const info = document.querySelector('.info');
			info.innerHTML = hasil.replace('KALAH', 'K&nbsp;A&nbsp;L&nbsp;A&nbsp;H');
		}, 1000);
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