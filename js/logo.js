

const heroLogo = document.querySelector('.hero-logo');
// const waterLogo = document.querySelector('.water-logo__block');

// Налаштовуємо Intersection Observer
const observerLogo = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			// Додаємо клас active при появі на екрані
			heroLogo.classList.add('active');
			// waterLogo.classList.add('active1');
		} else {
			// Видаляємо клас active, коли об'єкт виходить за межі екрану
			heroLogo.classList.remove('active');
		}
	});
});

observerLogo.observe(heroLogo);




// document.addEventListener('DOMContentLoaded', () => {
// 	const titleBox = document.querySelector('.hero-title__box'); // Елемент, за яким спостерігаємо

// 	// Налаштовуємо IntersectionObserver
// 	const observer = new IntersectionObserver(
// 		entries => {
// 			entries.forEach(entry => {
// 				if (entry.isIntersecting) {
// 					titleBox.classList.add('active');
// 					// Додаємо анімацію через JavaScript, коли елемент з'являється на екрані
// 					// titleBox.style.transition = '$anime-text'; // Стиль анімації
// 					titleBox.style.transform = 'translateY(-50px)'; // Переміщаємо елемент на екран
// 					titleBox.style.opacity = '0'; // Робимо елемент видимим
// 				} else {
// 					// Приховуємо елемент, коли він йде з екрану
// 					titleBox.style.transform = 'translateY(0vw)';
// 					titleBox.style.opacity = '1';
// 				}
// 			});
// 		},
// 		{ threshold: 0.1 } // 50% елемента має бути видно
// 	);

// 	observer.observe(titleBox); // Спостерігаємо за елементом
// });


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
