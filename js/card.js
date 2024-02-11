window.onload = function () {
   const cardsList = document.querySelector('.cards');
   const cards = document.querySelectorAll('.cards__item');

   cards.forEach(card => {
      const clone = card.cloneNode(true);
      cardsList.appendChild(clone);
   });
}


// const circleAnimation = document.getElementById('circleAnimation');
// const squareAnimation = document.getElementById('squareAnimation');

// circleAnimation.addEventListener('endEvent', function () {
//    setTimeout(function () {
//       squareAnimation.beginElement();
//    }, 10000); // 10 секунд затримки
// });
