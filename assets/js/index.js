$(function () {

    homeAnimation();

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
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
            1500: {
                items: 5
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
                items: 1
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

    // all home animation
    function homeAnimation() {
        // tower animation
        $('.home .home-banner-heading .tower').animate({
            bottom: '-6px',
            height: '492px'
        }, 2500);

        // tild-building animation
        $('.home .home-banner-heading .tild-building').animate({
            bottom: '-6px',
            height: '252px'
        }, 2500);


        // statue animation
        $('.home .home-banner-heading .statue').animate({
            bottom: '-6px',
            height: '364px'
        }, 2500);


        // wonders animation
        $('.home .home-banner-heading .wonders').animate({
            bottom: '-6px',
            height: '258px'
        }, 2500);


        // ballon-left animation
        $('.home .home-banner-heading .ballon-left').animate({
            top: '175px'
        }, 2500);


        // ballon-bottom animation
        $('.home .home-banner-heading .ballon-bottom').animate({
            top: '520px'
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

        $('.home .home-banner-heading .left-plan-img2').animate({
            top: '-200px'
        }, 3000);

        $('.home .home-banner-heading .right-plan-img2').animate({
            top: '100%'
        }, 3000);
    }
});