// Ініціалізація сцени, камери та рендерера
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(1082, 1670 / 50, 0.1, 1600); // Камера з аспектом для канваса 1170x50
var renderer = new THREE.WebGLRenderer({ alpha: true });

// Знаходимо елемент, куди потрібно вставити канвас
var container = document.querySelector('.waves');
container.appendChild(renderer.domElement);

// Встановлюємо розмір рендерера відповідно до контейнера
function resizeRenderer() {
	var width = 1170;  // Встановлюємо ширину канваса 1170px
	var height = 70;   // Встановлюємо висоту канваса 50px
	renderer.setSize(width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
}

// Оновлюємо розмір рендерера при зміні розміру вікна
resizeRenderer();
window.addEventListener('resize', resizeRenderer);

// Кількість ліній
var lineCount = 40;
var lineWidth = 0.8315;  // Відстань між лініями
var material = new THREE.LineBasicMaterial({ color: 0x0000ff });

var lines = [];
var amplitude = 0.051;
var frequency = 6.1;
var speed = 0.5;

// Створення ліній
for (var j = 0; j < lineCount; j++) {
	var geometry = new THREE.BufferGeometry();
	var vertices = [];

	// Створюємо точки для лінії
	for (var i = 0; i <= 1000; i++) {  // Створюємо 1000 точок для кожної лінії
		var x = i * 0.1;  // x координати для лінії
		var y = Math.sin(x * frequency + j) * amplitude;  // y координати по синусоїді
		vertices.push(x, y, 0);
	}

	geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
	var line = new THREE.Line(geometry, material);
	line.position.x = j * lineWidth; // Розміщення ліній по осі Y
	scene.add(line);
	lines.push(line);
}

// Камера
camera.position.z = 10;
camera.position.y = 0.1;
camera.position.x = 25;

// Функція анімації
var offsets = new Array(lineCount).fill(0);

function animate() {
	requestAnimationFrame(animate);

	lines.forEach(function (line, j) {
		var positions = line.geometry.attributes.position.array;

		offsets[j] += speed * 0.01;

		// Оновлюємо координати y для безперервного руху хвилі
		for (var i = 0; i < positions.length; i += 3) {
			// Зміщуємо y-координату відповідно до синусоїди
			positions[i + 1] = Math.sin((positions[i] + offsets[j]) * frequency) * amplitude;
		}
		line.geometry.attributes.position.needsUpdate = true;
	});

	renderer.render(scene, camera);
}

animate();
