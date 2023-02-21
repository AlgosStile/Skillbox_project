// burger
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';
  menu.classList.add('header__nav--visible');
});
