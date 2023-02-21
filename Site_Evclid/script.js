// Slider - Слайдер

document.querySelector('.slider__container').classList.add('swiper-container');
document.querySelector('.slider__wrapper').classList.add('swiper-wrapper');
document.querySelector('.slide-1').classList.add('swiper-slide');
document.querySelector('.slide-2').classList.add('swiper-slide');
document.querySelector('.slide-3').classList.add('swiper-slide');
document.querySelector('.slider-pagination').classList.add('swiper-pagination');

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,

  pagination: {
  el: '.swiper-pagination',
  clickabke: true
  },

});

// Tabs - Табы

document.querySelectorAll('.actions__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.actions__btn').forEach(function(btn) {
      btn.classList.remove('actions__btn--active')});
    e.currentTarget.classList.add('actions__btn--active');

    document.querySelectorAll('.actions__content').forEach(function(tabsBtn){
      tabsBtn.classList.remove('actions__content--active')});

    document.querySelector(`[data-target="${path}"]`).classList.add('actions__content--active');
  });
});

// Accordion - Аккордион

$(".accordion").accordion({
  heightStyle: "content",// устанавливает высоту панелей по содержимому.
  active: "false", //убираем активный аккордион 1,2,3,4 - нет активных.
  collapsible: "true", //закрывает открывшийся контент при клике на плюс и закрывает все вкладки одновременно.
});

//Burger - Бургер меню

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__link');
let closeMenu = document.querySelector('.nav__button');

burger.addEventListener('click', function(){

  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function(el){
  el.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  });
});

closeMenu.addEventListener('click', function() {
  menu.classList.remove('header__nav--active');

  document.body.classList.remove('stop-scroll');
});

// search bar - Поиск знак поиска в меню

let btnOpen = document.querySelector('.header__btn');
let bar = document.querySelector('.header__input');
let btnClose = document.querySelector('.input__btn-cross');

btnOpen.addEventListener('click', function() {
  bar.classList.add('header__input--active');
});

btnClose.addEventListener('click', function(){
  bar.classList.remove('header__input--active');
});

bar.addEventListener('submit', function(e){
  e.preventDefault();
});
