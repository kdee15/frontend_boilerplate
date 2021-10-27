// 0. JAVASCRIPT LAYER [ 0.02 DEVICE CHECK ] ##########################################################################
    
// 0.1. DEVICE CHECK --------------------------------------------------------------------------------------------------

function initDeviceCheck() {

  var deviceAgent = navigator.userAgent.toLowerCase();

  $('html').addClass('desktop');

  if (deviceAgent.match(/(iphone|ipod|ipad)/)) {
    $('html').removeClass('desktop');
    $('html').addClass('ios');
    $('html').addClass('mobile');
  }

  if (deviceAgent.match(/android/)) {
    $('html').removeClass('desktop');
    $('html').addClass('android');
    $('html').addClass('mobile');
  }

  if (deviceAgent.match(/blackberry/)) {
    $('html').removeClass('desktop');
    $('html').addClass('blackberry');
    $('html').addClass('mobile');
  }

  if (deviceAgent.match(/(symbianos|^sonyericsson|^nokia|^samsung|^lg)/)) {
    $('html').removeClass('desktop');
    $('html').addClass('mobile');
  }

}

// 0.1. END -----------------------------------------------------------------------------------------------------------
  
// 0.0 END ############################################################################################################