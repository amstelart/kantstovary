// Если на проекте jQuery
$( document ).ready(function() {
    $(".carousel").owlCarousel({
      items: 3,
      nav: true,
      loop: true,
      center: true,
      margin: 30,
      responsive : {
        0 : {
          items: 1,
          nav: true,
          loop: true,
          center: true,
        },
        480 : {
          items: 3,
        },
        768 : {
          items: 3,
        },
        992 : {
          items: 3,
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
