// Если на проекте jQuery
$( document ).ready(function() {
    $(".carousel").owlCarousel({
      items: 3,
      nav: true,
      loop: true,
      center: true,
      margin: 30,
      navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
      responsive : {
        0 : {
          items: 2,
          nav: true,
          loop: true,
          center: true,
        },
        480 : {
          items: 3,
        },
        768 : {
          items: 4,
        },
        992 : {
          items: 5,
        },
        1200 : {
          items: 5,
        },
        1800 : {
          items: 5,
        }
      }
    });
});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
