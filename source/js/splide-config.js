const splide = new Splide( '.splide', {
  type   : 'loop',
  perPage: 4,
  arrows: false,
  gap: 10,

  breakpoints: {
    768: {
      perPage: 2,
    },

    1280: {
      perPage: 3,
    }
  },
} );

splide.mount();


// let js = prompt('Какое «официальное» название JavaScript?');

// let message = (js === 'ECMAScript') ? 'Верно!' :
//   'Не знаете? ECMAScript!';

// alert( message );
