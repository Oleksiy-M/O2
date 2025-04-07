

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


// const titleLogo = document.querySelector('.title__logo');

// // Налаштовуємо Intersection Observer
// const observer = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {
// 		if (entry.isIntersecting) {
// 			// Додаємо клас active при появі на екрані
// 			titleLogo.classList.add('active2');
// 		}
// 		 else {
// 					// Видаляємо клас active, коли об'єкт виходить за межі екрану
// 			titleLogo.classList.remove('active2');
// 				}
// 	});
// });

// // Запускаємо спостереження за елементом
// observer.observe(titleLogo);


// document.addEventListener("DOMContentLoaded", function () {
// 	const titleLogo = document.querySelector('.develo-eco__list');

// 	// Додаємо клас animate після завантаження сторінки
// 	titleLogo.classList.add('animate');
// });

const develoEcoContents = document.querySelectorAll('.develo-eco__content');
const electric = document.querySelector('.electric');  // Єдиний елемент .electric

// Додаємо події для кожного елемента з класом .develo-eco__line
develoEcoContents.forEach(develoEcoContent => {
	develoEcoContent.addEventListener('mouseenter', () => {
		// Додаємо клас 'animate' до єдиного елемента .electric
		electric.classList.add('animate');
	});

	develoEcoContent.addEventListener('mouseleave', () => {
		// Видаляємо клас 'animate' з єдиного елемента .electric
		electric.classList.remove('animate');
	});
});




