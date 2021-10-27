// 1. JAVASCRIPT LAYER [ 1.02 SHOW/HIDE FUNCTIONS ] ###################################################################
// A. SHOW/HIDE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initToggleFunctions() {

// A.4. SCROLL TO LINK ------------------------------------------------------------------------------------------------

    $(".textLink").click(function(event){

        event.preventDefault();

        //calculate destination place
        var dest=0;
        if($(this.hash).offset().top > $(document).height()-$(window).height()){
            dest=$(document).height()-$(window).height();
        }else{
            dest=$(this.hash).offset().top;
        }

        //go to destination
        $('html,body').animate({scrollTop:dest}, 1000,'swing');

        //add class to burger
        $('#mobi-nav').addClass('hide-nav');

        //add active class
        $('.textLink').removeClass('active');
        $(this).addClass('active');

    });

// A.4. END -----------------------------------------------------------------------------------------------------------

// A.5. SHOW HIDE LOGO ------------------------------------------------------------------------------------------------

    var t = $('html').offset().top;

    $(document).scroll(function(){

        if (document.documentElement.clientWidth > 640) {

            // Hide the logo, and show as you scroll
            if($(this).scrollTop() > t)
            {
                $('.logo').css({"display":'block'});

            }else{
                $('.logo').css({"display":'none'});
            }


        } else {}

    });

// A.5. END -----------------------------------------------------------------------------------------------------------

}

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1. JAVASCRIPT LAYER [ 1.02 END ] ###################################################################################