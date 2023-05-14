// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@ card-6 @@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const cardButton6 = document.querySelector('.card-6 button');

cardButton6.addEventListener('click', function () {
  this.parentElement.parentElement.classList.toggle('active');
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@ card-10 @@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const cardButton10 = document.querySelector('.card-10 .card__share');

cardButton10.addEventListener('click', function () {
  this.parentElement.classList.toggle('active');
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@ card-12 @@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const cardButton12 = document.querySelector('.card-12 button');

cardButton12.addEventListener('click', function () {
  cardButton12.parentElement.classList.toggle('active');
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@ card-18 @@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const cardToggle = document.querySelector('.card-18 .card__social .toggle');

cardToggle.addEventListener('click', function () {
  const social = this.parentElement.parentElement;

  if (social.classList.contains('active')) {
    social.classList.add('down-animation');

    setTimeout(() => {
      social.classList.remove('down-animation');
    }, 1000);
  }

  social.classList.toggle('active');
});
