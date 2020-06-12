"use strict";
jQuery(document).ready(function ($) {

//==========================================
// MOBAILE MENU
//=========================================

    $('#navbar-menu').find('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 0)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });


//==========================================
//ScrollUp
//=========================================

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('#scrollUp').fadeIn('slow');
        } else {
            $('#scrollUp]').fadeOut('slow');
        }
    });

    $('#scrollUp').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });



//==========================================
// For fancybox active
//=========================================

    $('.fancybox').fancybox();
    
    

//==========================================
// Loading
//=========================================

    $(window).load(function () {
        $("#loading").fadeOut(500);
    });



        // window.onscroll = function() {myFunction()};
        
        // var navbar = document.getElementById("navbar");
        // var sticky = navbar.offsetTop;
        
        // function myFunction() {
        //   if (window.pageYOffset >= sticky) {
        //     navbar.classList.add("sticky")
        //   } else {
        //     navbar.classList.remove("sticky");
        //   }
        // }
       

        if ($(window).width() > 992) {
            $(window).scroll(function(){  
               if ($(this).scrollTop() > 40) {
                  $('#navbar').addClass("fixed-top");
                  // add padding top to show content behind navbar
                  $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
                }else{
                  $('#navbar').removeClass("fixed-top");
                   // remove padding top from body
                  $('body').css('padding-top', '0');
                }   
            });
          } // end if

});