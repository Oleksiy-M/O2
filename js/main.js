// Ініціалізація сцени, камери та рендерера
var scene = new THREE.Scene();
var camera = new THREE.OrthographicCamera(-215, 215, 65, -65, 1, 1000); // Орторографічна камера для 2D-ефектів

// Рендерер
var renderer = new THREE.WebGLRenderer({ alpha: true });
var container = document.querySelector('.waves');  // Знаходимо контейнер .waves
container.appendChild(renderer.domElement);  // Додаємо канвас в DOM контейнера .waves

// Функція для налаштування розміру рендерера
function resizeRenderer() {
	var width = container.clientWidth;  // Ширина контейнера .waves
	var height = container.clientHeight;  // Висота контейнера .waves
	renderer.setSize(width, height);  // Встановлюємо розміри рендерера
	camera.aspect = width / height;  // Оновлюємо аспект камери
	camera.updateProjectionMatrix();  // Оновлюємо матрицю проекції
}

resizeRenderer();  // Спочатку налаштуємо розміри
window.addEventListener('resize', resizeRenderer);  // Оновлюємо при зміні розміру вікна

// Параметри синусоїди
var amplitude = 8;  // Висота хвилі
var frequency = 0.52; // Частота хвилі
var pointsCount = 1000;  // Кількість точок на лінії
var lineSpacing = 4;  // Відстань між лініями
var numLines = 10;  // Кількість ліній

// Масив для зберігання ліній
var lines = [];

// Створення ліній
for (var j = 0; j < numLines; j++) {
	var geometry = new THREE.BufferGeometry();
	var vertices = new Float32Array(pointsCount * 3);  // Масив для зберігання координат точок (X, Y, Z)

	// Створюємо синусоїдальну лінію для кожної лінії
	for (var i = 0; i < pointsCount; i++) {
		var x = (i - pointsCount / 2) * 0.5;  // Відстань між точками по осі X
		var y = amplitude * Math.sin(x * frequency);  // Синусоїдальна функція для Y
		vertices[i * 3] = x;      // Встановлюємо X координату
		vertices[i * 3 + 1] = y + j * lineSpacing;  // Встановлюємо Y координату з зсувом для кожної лінії
		vertices[i * 3 + 2] = 0;  // Z координата (залишимо 0 для 2D ефекту)
	}

	geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

	// Визначаємо колір лінії: синя для парних індексів, біла для непарних
	var lineColor = (j % 2 === 0) ? 0x0025f4 : 0x02eaff;

	var material = new THREE.LineBasicMaterial({ color: lineColor });  // Колір лінії
	var line = new THREE.Line(geometry, material);
	scene.add(line);

	lines.push(line);  // Додаємо лінію до масиву ліній
}


// Камера
camera.position.z = 5;  // Розташування камери, щоб побачити лінії
camera.position.y = 70;  // Розташування камери, щоб побачити лінії

// Час для хвилі
var time = 0;

// Рендеринг сцени
function animate() {
	updateWave();  // Оновлюємо хвилі
	renderer.render(scene, camera);
	requestAnimationFrame(animate);  // Підключаємо рекурсивний рендеринг
}

animate();  // Запуск рендерингу

// Функція для оновлення хвиль
function updateWave() {
	// Оновлюємо Y координати для кожної лінії
	lines.forEach(function (line, index) {
		var positions = line.geometry.attributes.position.array;

		for (var i = 0; i < pointsCount; i++) {
			var x = positions[i * 3];  // Отримуємо поточне значення X
			// Оновлюємо Y координату для кожної лінії, додаємо зсув по Y
			positions[i * 3 + 1] = amplitude * Math.sin(x * frequency + time) + index * lineSpacing;  // Зміщуємо лінію на певну висоту
		}

		// Повідомляємо Three.js, що дані змінились
		line.geometry.attributes.position.needsUpdate = true;
	});

	time += 0.15;  // Оновлюємо час для хвилі
}
