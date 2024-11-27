

const svgBox = document.querySelector('.svg-box');

// Налаштовуємо Intersection Observer
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			svgBox.classList.add('active');
		} 
		else {
			// Видаляємо клас active, коли об'єкт виходить за межі екрану
			svgBox.classList.remove('active');
		}
	});
});

observer.observe(svgBox);





const develoEcosvg = document.querySelector('.develo-eco__svg');

// Налаштовуємо Intersection Observer
const observerSvg = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			develoEcosvg.classList.add('active');
		} 
		else {
			// Видаляємо клас active, коли об'єкт виходить за межі екрану
			develoEcosvg.classList.remove('active');
		}
	});
});

// Запускаємо спостереження за елементом
observerSvg.observe(develoEcosvg);






const ecoSvg = document.querySelector('.eco__svg');

// Налаштовуємо Intersection Observer
const observerEcoSvg = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			ecoSvg.classList.add('active');
		} 
		else {
			// Видаляємо клас active, коли об'єкт виходить за межі екрану
			ecoSvg.classList.remove('active');
		}
	});
});

// Запускаємо спостереження за елементом
observerEcoSvg.observe(ecoSvg);




const ecoSvgImp = document.querySelector('.eco__svg-imp');

// Налаштовуємо Intersection Observer
const observerSvgImp = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			observerSvgImp.classList.add('active');
		} 
		else {
			// Видаляємо клас active, коли об'єкт виходить за межі екрану
			ecoSvgImp.classList.remove('active');
		}
	});
});

// Запускаємо спостереження за елементом
observerSvgImp.observe(ecoSvgImp);



const cardsOverlay = document.querySelector('.cards__overlay');

// Налаштовуємо Intersection Observer
const observerCards = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			cardsOverlay.classList.add('active');
		} 
		else {
			// Видаляємо клас active, коли об'єкт виходить за межі екрану
			cardsOverlay.classList.remove('active');
		}
	});
});

// Запускаємо спостереження за елементом
observerCards.observe(cardsOverlay);




const develoEcoArt  = document.querySelector('.develo-eco__art');

// Налаштовуємо Intersection Observer
const observerArt = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			develoEcoArt.classList.add('active');
		} 
		else {
			// Видаляємо клас active, коли об'єкт виходить за межі екрану
			develoEcoArt.classList.remove('active');
		}
	});
});

// Запускаємо спостереження за елементом
observerArt.observe(develoEcoArt);
