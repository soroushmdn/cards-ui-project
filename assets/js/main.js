// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@ card-6 @@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const cardButton6 = document.querySelector('.card-6 button');

cardButton6.addEventListener('click', function () {
  this.parentElement.parentElement.classList.toggle('active');
});
