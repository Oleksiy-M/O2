

const heroLogo = document.querySelector('.hero-logo');
const waterLogo = document.querySelector('.water-logo__block');

// Налаштовуємо Intersection Observer
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			// Додаємо клас active при появі на екрані
			heroLogo.classList.add('active');
			waterLogo.classList.add('active');
		} else {
			// Видаляємо клас active, коли об'єкт виходить за межі екрану
			heroLogo.classList.remove('active');
		}
	});
});

// Запускаємо спостереження за елементом
observer.observe(heroLogo);
observer.observe(waterLogo);


document.addEventListener('DOMContentLoaded', () => {
	const titleBox = document.querySelector('.hero-title__box'); // Елемент, за яким спостерігаємо

	// Налаштовуємо IntersectionObserver
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					titleBox.classList.add('active');
					// Додаємо анімацію через JavaScript, коли елемент з'являється на екрані
					// titleBox.style.transition = '$anime-text'; // Стиль анімації
					titleBox.style.transform = 'translateX(0vw)'; // Переміщаємо елемент на екран
					titleBox.style.opacity = '1'; // Робимо елемент видимим
				} else {
					// Приховуємо елемент, коли він йде з екрану
					titleBox.style.transform = 'translateX(-50vw)';
					// titleBox.style.opacity = '0';
				}
			});
		},
		{ threshold: 0.1 } // 50% елемента має бути видно
	);

	observer.observe(titleBox); // Спостерігаємо за елементом
});
