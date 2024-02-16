

window.onload = function () {
   const cardsList = document.querySelector('.cards');
   const cards = document.querySelectorAll('.cards__item');

   cards.forEach(card => {
      const clone = card.cloneNode(true);
      cardsList.appendChild(clone);
   });
}









var section = document.querySelector('.section-histore__end');
var images = {
   'mobile': [
      '../img/hist-aqua/aqveduct0/aqua-mobil.jpg',
      '../img/hist-aqua/aqveduct1/aqua-mobil.jpg',
      '../img/hist-aqua/aqveduct2/aqua-mobil.jpg',
      '../img/hist-aqua/aqveduct3/aqua-mobil.jpg'
   ],
   'tablet': [
      '../img/hist-aqua/aqveduct0/aqua-tablet.jpg',
      '../img/hist-aqua/aqveduct1/aqua-tablet.jpg',
      '../img/hist-aqua/aqveduct2/aqua-tablet.jpg',
      '../img/hist-aqua/aqveduct3/aqua-tablet.jpg'
   ],
   'desktop': [
      '../img/hist-aqua/aqveduct0/aqua.jpg',
      '../img/hist-aqua/aqveduct1/aqua.jpg',
      '../img/hist-aqua/aqveduct2/aqua.jpg',
      '../img/hist-aqua/aqveduct3/aqua.jpg'
   ]
};

var currentIndex = {
   'mobile': 0,
   'tablet': 0,
   'desktop': 0
};

function changeBackgroundImage(device) {
   var responsiveImage = images[device][currentIndex[device] % images[device].length];
   section.style.backgroundImage = 'linear-gradient(#cdb86dba 5%, #481043d1), url("' + responsiveImage + '")';
   currentIndex[device]++;
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

