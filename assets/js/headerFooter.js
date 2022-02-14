$(function () {
    hamburgerMenu();
    // hamburger-menu
    function hamburgerMenu() {
        $('.nav-sidebar-button ').click(function () {
            $('.nav-bar-tabs').animate({
                right: '0px'
            });
            $('.nav-close-button').animate({
                right: '170px'
            });
        });
    }

    $('.nav-close-button').click(function () {
        $('.nav-bar-tabs').animate({
            right: '-200px'
        });
        $('.nav-close-button').animate({
            right: '-25px'
        });
    });

    var windowWidth = $(window).width();
    // console.log(windowWidth);    
    if(windowWidth > 870) {
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            // console.log(scroll);
            if (scroll >= 38) {
                $('header').css({
                    top: '0px'
                });
            } else {
                $('header').css({
                    top: '38px'
                });
            }        
    
        });
    }
    if(windowWidth < 870) {
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            $('header').css({
                top: '70px'
            });
            if (scroll >= 38) {
                $('header').css({
                    top: '0px'
                });
            } else {
                $('header').css({
                    top: '70px'
                });
            }        
    
        });
    }


    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 90,
        modifier: 2,
        slideShadows: true,
      },
      autoplay: {
        delay: 1000,
      },

      loop :true,
      autoPlay: true
    });
    
});