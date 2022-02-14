$(function () {
    homeAnimation();
    hamburgerMenu();

    //student owl carosals
    $('.testimonial-owl-carosal,.blog-owl-carosal').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 2000,
        slideTransition: 'linear',
        autoplayHoverPause: true,
        // navText : [
        //     'prev',
        //     'next'
        // ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })


    $('.countries-we-served-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
        slideTransition: 'linear',
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })


    $('.avilable-in-countries-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
        slideTransition: 'linear',
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 1
            }
        }
    })

    // counter up initilization
    $('.number').counterUp({
        delay: 10,
        time: 1000
    });

    // aos library initilization
    AOS.init();

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



    // all home animation
    function homeAnimation() {
        // tower animation
        $('.home .home-banner-heading .tower').animate({
            bottom: '0px',
            height: '492px'
        }, 2500);

        // tild-building animation
        $('.home .home-banner-heading .tild-building').animate({
            bottom: '0px',
            height: '252px'
        }, 2500);


        // statue animation
        $('.home .home-banner-heading .statue').animate({
            bottom: '0px',
            height: '364px'
        }, 2500);


        // wonders animation
        $('.home .home-banner-heading .wonders').animate({
            bottom: '0px',
            height: '258px'
        }, 2500);


        // ballon-left animation
        $('.home .home-banner-heading .ballon-left').animate({
            top: '175px'
        }, 2500);


        // ballon-bottom animation
        $('.home .home-banner-heading .ballon-bottom').animate({
            top: '480px'
        }, 2500);


        // ellipse animation
        $('.home .home-banner-heading .ellipse').animate({
            top: '140px'
        }, 2500);


        // ballon-right animation
        $('.home .home-banner-heading .ballon-right').animate({
            top: '30%'
        }, 2500);

        // left-plan-img animation
        $('.home .home-banner-heading .left-plan-img').animate({
            top: '240px',
            left: '0%'
        }, 2500);

        // right-plan-img animation
        $('.home .home-banner-heading .right-plan-img').animate({
            top: '27%',
            left: '69%'
        }, 2500);

    }


});