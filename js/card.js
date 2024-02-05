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


// var img = document.querySelector('.gif-container img');

// // Додавання класу "paused" при наведенні на елемент
// img.addEventListener('mouseover', function () {
//    img.parentElement.classList.add('paused');
// });

// // Видалення класу "paused" при відведенні від елементу
// img.addEventListener('mouseout', function () {
//    img.parentElement.classList.remove('paused');
// });

// // Додавання класу "paused" при фокусі на елемент
// img.addEventListener('focus', function () {
//    img.parentElement.classList.add('paused');
// });

// // Видалення класу "paused" при відведенні фокусу від елементу
// img.addEventListener('blur', function () {
//    img.parentElement.classList.remove('paused');
// });
