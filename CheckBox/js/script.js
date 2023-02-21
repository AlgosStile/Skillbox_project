// select
const select = document.querySelector('.custom-select');
const choices = new Choices(select, {
  itemSelectText: '',
  position: 'bottom',
  searchEnabled: false,
});

// map - Яндекс карты

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [48.87219657376512,2.354223999999991],
    zoom: 17
  });

  var myPlacemark = new ymaps.Placemark([48.87219657376512,2.354223999999991], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/location.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark);
}

// form - Форма
let selector = document.querySelector("input[type='tel']");

let im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate('.form', {
  rules: {
    email: {
      required: true,
      email: true
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    },
    name: {
      required: true
    },
  },
  messages: {
    email: {
      required: 'Укажите ваш e-mail',
    },
    tel: {
      required: 'Укажите ваш телефон',
    },
    name: {
      required: 'Как вас зовут?',
    }
  },
  colorWrong: '#FF5C00',
});
