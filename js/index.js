// History button
$("#button-heading").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            window.location.hash = hash;
        });
    }
});
// Scroll icon top
$(document).ready(function() {
    $('.scroll-on-click').hide();
 });
     $(document).scroll(function () {
         var y = $(this).scrollTop();
         
         if (y > 500) {
             $('.scroll-on-click').fadeIn();
         } else {
             $('.scroll-on-click').fadeOut();
             
         }
     });
     document.querySelectorAll('a[href^="#scBTN"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
 
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });
// Live scroll
    $('body').scrollspy({target: '#nav'});
// Smooth scroll
    $("#nav a").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {

          window.location.hash = hash;
        });
      }
    });
