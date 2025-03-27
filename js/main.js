var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({ alpha: true });
var container = document.querySelector('.electric'); // Ваш селектор .electric
container.appendChild(renderer.domElement);

// Функція для зміни розміру
function resizeRenderer() {
	var width = container.clientWidth;
	var height = container.clientHeight;
	renderer.setSize(width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
}

resizeRenderer();
window.addEventListener('resize', resizeRenderer);

// Налаштування
var maxPoints = 5; // Кількість точок лінії
var lineLength = 70; // Довжина лінії
var growing = true; // Лінія спочатку буде рости
var pointIndex = 1; // Індекс поточної точки (початкова точка)
var timeFactor = 0.01; // Швидкість анімації
var animationTime = 0; // Таймер для зміни швидкості

// Відстань між лініями
var lineSpacing = 0.000001; // Відстань між лініями по осі Y

// Кількість ліній, які будемо анімувати
var numLines = 5; // Тепер п’ять ліній
var lines = [];

// Массив кольорів для ліній
var lineColors = [0xFFFFFF, 0x00FFFF]; // Біла та синя лінія

// Функція для генерації випадкових значень Y
function generateRandomY() {
	return (Math.random() - 0.5) * 6; // Випадкове значення від -3 до +3
}

for (let i = 0; i < numLines; i++) {
	var geometry = new THREE.BufferGeometry();
	var points = [];

	// Створюємо початкову точку для кожної лінії
	points.push(new THREE.Vector3(-lineLength / 2, generateRandomY(), 0));

	// Чергування кольорів між білим і синім для кожної лінії
	var lineMaterial = new THREE.LineBasicMaterial({
		color: lineColors[i % 2] // Кожній лінії буде чергуватися білий (0xFFFFFF) і синій (0x00FFFF)
	});

	// Додаємо лінію до сцени
	var line = new THREE.Line(geometry, lineMaterial);

	// Задаємо різні позиції для кожної лінії по осі Y
	line.position.y = i * lineSpacing; // Перша лінія на y = 0, друга на y = lineSpacing

	scene.add(line);

	// Зберігаємо інформацію про кожну лінію
	lines.push({ geometry: geometry, points: points, growing: true, pointIndex: 1, line: line });
}

// Встановлюємо позицію камери
camera.position.z = 50;

// Функція для анімації
function animate() {
	// Збільшуємо час
	animationTime += timeFactor;

	// Оновлюємо кожну лінію
	lines.forEach(lineData => {
		if (lineData.growing) {
			// Якщо лінія росте
			if (lineData.pointIndex < maxPoints) {
				// Додаємо точку зі зміщенням по осі Y (випадкове значення)
				lineData.points.push(new THREE.Vector3(
					-lineLength / 2 + (lineData.pointIndex * (lineLength / (maxPoints - 1))),
					generateRandomY(), // Випадкове значення для Y
					0
				));
				lineData.pointIndex++;
			} else {
				lineData.growing = false; // Коли всі точки додано, починаємо зменшення
			}
		} else {
			// Якщо лінія зменшується
			if (lineData.pointIndex > 1) {
				// Видаляємо точку зліва (окрім правої точки)
				lineData.points.shift();
				lineData.pointIndex--;
			} else {
				// Коли лінія повністю зникла, починаємо рости знову
				lineData.points = []; // Очищаємо точок
				lineData.points.push(new THREE.Vector3(-lineLength / 2, generateRandomY(), 0)); // Відновлюємо початкову точку
				lineData.pointIndex = 1; // Починаємо знову додавати точки
				lineData.growing = true; // Знову починаємо ріст
			}
		}

		// Оновлюємо геометрію лінії
		lineData.geometry.setFromPoints(lineData.points);
	});

	// Рендеринг сцени
	renderer.render(scene, camera);
	requestAnimationFrame(animate); // Запускаємо наступний кадр анімації
}

// Запуск анімації
animate();
