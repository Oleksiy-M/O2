






// change-Background-Image




var section = document.querySelector('.section-histore__end');
var images = {
   'mobile': [
      '../img/histaqua/aqveduct0/aqua-mobil.jpg',
      '../img/histaqua/aqveduct1/aqua-mobil1.jpg',
      '../img/histaqua/aqveduct2/aqua-mobil2.jpg',
      '../img/histaqua/aqveduct3/aqua-mobil3.jpg'
   ],
   'tablet': [
      '../img/histaqua/aqveduct0/aqua-tablet.jpg',
      '../img/histaqua/aqveduct1/aqua-tablet1.jpg',
      '../img/histaqua/aqveduct2/aqua-tablet2.jpg',
      '../img/histaqua/aqveduct3/aqua-tablet3.jpg'
   ],
   'desktop': [
      '../img/histaqua/aqveduct0/aqua.jpg',
      '../img/histaqua/aqveduct1/aqua1.jpg',
      '../img/histaqua/aqveduct2/aqua2.jpg',
      '../img/histaqua/aqveduct3/aqua3.jpg'
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





window.onload = function () {
   const cardsList = document.querySelector('.cards');
   const cards = document.querySelectorAll('.cards__item');

   cards.forEach(card => {
      const clone = card.cloneNode(true);
      cardsList.appendChild(clone);
   });
}