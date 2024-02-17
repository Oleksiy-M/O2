

window.onload = function () {
   const cardsList = document.querySelector('.cards');
   const cards = document.querySelectorAll('.cards__item');

   cards.forEach(card => {
      const clone = card.cloneNode(true);
      cardsList.appendChild(clone);
   });
}




// change-Background-Image




var section = document.querySelector('.section-histore__end');
var images = {
   'mobile': [
      '../img/hist-aqua/aqveduct0/aqua-mobil.png',
      '../img/hist-aqua/aqveduct1/aqua-mobil.png',
      '../img/hist-aqua/aqveduct2/aqua-mobil.png',
      '../img/hist-aqua/aqveduct3/aqua-mobil.png'
   ],
   'tablet': [
      '../img/hist-aqua/aqveduct0/aqua-tablet.png',
      '../img/hist-aqua/aqveduct1/aqua-tablet.png',
      '../img/hist-aqua/aqveduct2/aqua-tablet.png',
      '../img/hist-aqua/aqveduct3/aqua-tablet.png'
   ],
   'desktop': [
      '../img/hist-aqua/aqveduct0/aqua.png',
      '../img/hist-aqua/aqveduct1/aqua.png',
      '../img/hist-aqua/aqveduct2/aqua.png',
      '../img/hist-aqua/aqveduct3/aqua.png'
   ]
};

var currentIndex = {
   'mobile': 0,
   'tablet': 0,
   'desktop': 0
};

function changeBackgroundImage(device) {
   var responsiveImage = images[device][currentIndex[device] % images[device].length];
   section.style.opacity = 0; // Зменшуємо прозорість секції
   setTimeout(function () {
      section.style.backgroundImage = ' url("' + responsiveImage + '")';
      currentIndex[device]++;
      section.style.opacity = 1; // Повертаємо прозорість секції
   }, 1000); // Затримка для плавної зміни
}

function startChangingImages() {
   setInterval(function () {
      changeBackgroundImage('mobile');
   }, 10000);
   setInterval(function () {
      changeBackgroundImage('tablet');
   }, 10000);
   setInterval(function () {
      changeBackgroundImage('desktop');
   }, 10000);
}

startChangingImages();


// Функція для зміни зображення при завантаженні сторінки
function changeBackgroundOnLoad() {
   changeBackgroundImage('mobile');
   changeBackgroundImage('tablet');
   changeBackgroundImage('desktop');
}

// Викликаємо функцію при завантаженні сторінки
changeBackgroundOnLoad();






// Animation - aqueduct

const sectionCard = document.querySelector('.section-card');
const aqueduct = document.querySelector('.aqueduct');

sectionCard.addEventListener('mouseenter', () => {
   aqueduct.style.animationPlayState = 'paused';
});

sectionCard.addEventListener('mouseleave', () => {
   aqueduct.style.animationPlayState = 'running';
});


const aqueductNext = document.querySelector('.aqueduct-next');

sectionCard.addEventListener('mouseenter', () => {
   aqueductNext.style.animationPlayState = 'paused';
});

sectionCard.addEventListener('mouseleave', () => {
   aqueductNext.style.animationPlayState = 'running';
});



// Animation - bicycle

const containerMove = document.querySelector('.gif-container__move');

sectionCard.addEventListener('mouseenter', () => {
   containerMove.style.display = 'none';
});

sectionCard.addEventListener('mouseleave', () => {
   containerMove.style.display = 'flex';
});

const containerStop = document.querySelector('.gif-container__stop');

sectionCard.addEventListener('mouseenter', () => {
   containerStop.style.display = 'flex';
});

sectionCard.addEventListener('mouseleave', () => {
   containerStop.style.display = 'none';
});


const boxGif = document.querySelector('.box-gif');

sectionCard.addEventListener('mouseenter', () => {
   boxGif.style.animationPlayState = 'paused';
});

sectionCard.addEventListener('mouseleave', () => {
   boxGif.style.animationPlayState = 'running';
});