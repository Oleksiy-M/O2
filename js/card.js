






// change-Background-Image



var images = document.querySelectorAll('.section-histore__end img');
var currentIndex = 0;

function changeImageOpacity() {
   var currentImage = images[currentIndex];
   var nextIndex = (currentIndex + 1) % images.length;
   var nextImage = images[nextIndex];

   // Зменшуємо прозорість поточного зображення
   currentImage.style.opacity = 0;

   // Збільшуємо прозорість наступного зображення через 1 секунду
   setTimeout(function () {
      nextImage.style.opacity = 1;
   }, 1000);

   // Оновлюємо поточний індекс
   currentIndex = nextIndex;
}

// Встановлюємо інтервал для зміни зображень кожні 10 секунд
setInterval(changeImageOpacity, 10000);

// Початково встановлюємо прозорість першого зображення
images[currentIndex].style.opacity = 1;





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






