// Ініціалізація сцени, камери та рендерера
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(25, 1170 / 50, 0.1, 1000); // Камера з фіксованим аспектом
var renderer = new THREE.WebGLRenderer({ alpha: true });

// Знаходимо елемент, куди потрібно вставити канвас
var container = document.querySelector('.waves');
container.appendChild(renderer.domElement);

// Встановлюємо розмір рендерера відповідно до канваса 1170x50
function resizeRenderer() {
	var width = 1170;  // Ширина канваса 1170px
	var height = 50;   // Висота канваса 50px
	renderer.setSize(width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
}

// Оновлюємо розмір рендерера при зміні розміру вікна
resizeRenderer();
window.addEventListener('resize', resizeRenderer);

// Кількість точок для синусоїди
var pointsCount = 10000;  // Кількість точок для синусоїди
var lines = [];  // Масив для зберігання ліній

// Функція для створення синусоїдальної лінії
function createSineLine(offsetY, offsetZ, color) {
	var lineVertices = [];

	for (var i = 0; i < pointsCount; i++) {
		var x = (i - pointsCount / 2) * 0.1;  // Відстань між точками по осі X
		var y = Math.sin(x * 0.1) * 5 + offsetY;  // Синусоїдальна функція по осі Y
		lineVertices.push(x, y, offsetZ);  // Додаємо точку з глибиною
	}

	var geometry = new THREE.BufferGeometry();
	geometry.setAttribute('position', new THREE.Float32BufferAttribute(lineVertices, 3));

	// Матеріал з кольором, який передається
	var material = new THREE.LineBasicMaterial({ color: color });
	var line = new THREE.Line(geometry, material);

	scene.add(line);
	return line;
}

// Створення кількох ліній з чергуванням кольорів
var numberOfLines = 90; // Кількість ліній
for (var i = 0; i < numberOfLines; i++) {
	var offsetY = i * 1;  // Задаємо зміщення по осі Y для кожної лінії
	var offsetZ = (i - numberOfLines / 1) * 1;  // Різні глибини для кожної лінії

	// Визначаємо колір лінії: біла для непарних і синя для парних
	var lineColor = (i % 2 === 0) ? 0x005eff : 0x0099ff; // Синій для парних, білий для непарних

	lines.push(createSineLine(offsetY, offsetZ, lineColor)); // Створюємо лінію і додаємо в масив
}

// Параметри хвилі
var amplitude = 2;  // Висота хвилі (амплітуда)
var frequency = 0.04; // Початкова частота хвилі
var lineSpacing = 10; // Проміжок між лініями

// Камера
camera.position.z = 30; // Камера віддалена, щоб побачити всі лінії
camera.position.y = 10; // Камера віддалена, щоб побачити всі лінії

// Змінна для контролю часу анімації
var time = 0;

// Функція рендерингу
function animate() {
	requestAnimationFrame(animate);

	// Оновлення координат Y для кожної лінії, щоб створити ефект хвилі
	lines.forEach(function (line) {
		var positions = line.geometry.attributes.position.array;

		// Оновлюємо y-координату для кожної точки
		for (var i = 0; i < positions.length; i += 3) {
			// Оновлюємо y-координату для хвилі, зміщуючи її за допомогою синусоїдальної функції та часу
			var x = positions[i];
			var y = Math.sin(x * frequency + time) * amplitude;
			positions[i + 1] = y;
		}

		// Повідомляємо Three.js, що дані змінились
		line.geometry.attributes.position.needsUpdate = true;
	});

	// Оновлюємо час для хвиль (можна збільшити значення для швидшого руху)
	time += 0.1;

	// Рендеринг сцени
	renderer.render(scene, camera);
}

animate();
