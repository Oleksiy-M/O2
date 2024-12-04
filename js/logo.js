

// const heroLogo = document.querySelector('.hero-logo');
// // const waterLogo = document.querySelector('.water-logo__block');

// // Налаштовуємо Intersection Observer
// const observerLogo = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {
// 		if (entry.isIntersecting) {
// 			// Додаємо клас active при появі на екрані
// 			heroLogo.classList.add('active');
// 			// waterLogo.classList.add('active1');
// 		} else {
// 			// Видаляємо клас active, коли об'єкт виходить за межі екрану
// 			heroLogo.classList.remove('active');
// 		}
// 	});
// });

// observerLogo.observe(heroLogo);



// dddddd


const titleLogo = document.querySelector('.title__logo');

// Налаштовуємо Intersection Observer
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			// Додаємо клас active при появі на екрані
			titleLogo.classList.add('active2');
		} 
	});
});

// Запускаємо спостереження за елементом
observer.observe(titleLogo);
