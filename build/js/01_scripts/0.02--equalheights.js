// 0. JAVASCRIPT LAYER [ 0.03 EQUAL HEIGHTS ] #########################################################################
    
// 0.1. EQUAL HEIGHTS -------------------------------------------------------------------------------------------------

/*
    http://codepen.io/micahgodbolt/pen/FgqLc

    Thanks to CSS Tricks for pointing out this bit of jQuery
    http://css-tricks.com/equal-height-blocks-in-rows/
    It's been modified into a function called at page load and then each time the page is resized.
    One large modification was to remove the set height before each new calculation.
*/

var equalheight;
equalheight = function (container) {
  var currentTallest = 0,
    currentRowStart = 0,
    topPosition = 0,
    currentDiv = 0,
    rowDivs = [],
    $el;
  $(container).each(function () {

    $el = $(this);
    $($el).height('auto');
    topPosition = $el.position().top;

    if (currentRowStart != topPosition) {
      for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }
      rowDivs.length = 0; // empty the array
      currentRowStart = topPosition;
      currentTallest = $el.height();
      rowDivs.push($el);
    } else {
      rowDivs.push($el);
      currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
      rowDivs[currentDiv].height(currentTallest);
    }
  });
};

// 0.1. END -----------------------------------------------------------------------------------------------------------

// 0.0 END ############################################################################################################