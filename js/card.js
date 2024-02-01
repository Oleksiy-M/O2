window.onload = function () {
   const cardsList = document.querySelector('.cards');
   const cards = document.querySelectorAll('.cards__item');

   cards.forEach(card => {
      const clone = card.cloneNode(true);
      cardsList.appendChild(clone);
   });
}


// document.querySelector('.section-card').addEventListener('mouseenter', function () {
//    const cards = document.querySelectorAll('.cards');
//    cards.forEach(card => card.classList.add('paused'));
// });

// document.querySelector('.section-card').addEventListener('mouseleave', function () {
//    const cards = document.querySelectorAll('.cards');
//    cards.forEach(card => card.classList.remove('paused'));
// });


