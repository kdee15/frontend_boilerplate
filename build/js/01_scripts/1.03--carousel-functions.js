// 1. JAVASCRIPT LAYER [ 1.02 SHOW/HIDE FUNCTIONS ] ###################################################################
// A. SHOW/HIDE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initCarouselFunctions() {

// A.3. CAROUSEL SCRIPTS ----------------------------------------------------------------------------------------------

  // A.2.1. DESTROY CAROUSEL ------------------------------

  function owlInitialize() {
    if ($(window).width() < 768) {
      $('.classname').addClass("owl-carousel");
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 0,
        nav: true,
        dots: true,
        items: 1,
      });
    }else{
      $('.owl-carousel').owlCarousel('destroy');
      $('.classname').removeClass("owl-carousel");
    }
  }
  $(document).ready(function(e) {
    owlInitialize();
  });
  $(window).resize(function() {
    owlInitialize();
  });

  // A.2.1. END -----------------------------------------

// A.3. END -----------------------------------------------------------------------------------------------------------

}

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1. JAVASCRIPT LAYER [ 1.02 END ] ###################################################################################