$(function () {
    hamburgerMenu();
    // hamburger-menu
    $('.nav-sidebar-button ').click(function () {
        $('.nav-bar-tabs').animate({
            right: '0px'
        });
        $('.nav-close-button').animate({
            right: '170px'
        });
    });
    function hamburgerMenu() {
        
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


    

    
});