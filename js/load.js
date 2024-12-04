
document.addEventListener("DOMContentLoaded", () => {
	// При завантаженні контенту
	window.addEventListener("load", () => {
		const preloader = document.getElementById("preloader");
		preloader.style.opacity = "0"; // Анімація зникнення
		setTimeout(() => {
			preloader.style.display = "none"; // Приховуємо повністю
		}, 500); // Час відповідає анімації
	});
});