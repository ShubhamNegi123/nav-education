$(function () {
      

    var windowWidth = $(window).width();
    // console.log(windowWidth);    
    if(windowWidth > 870) {
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            //console.log(scroll);
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
    if(windowWidth <= 870) {
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            //console.log(scroll);
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
    if(windowWidth <= 862) {
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            //console.log(scroll);
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
    if(windowWidth <= 767) {
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            //console.log(scroll);
            if (scroll >= 38) {
                $('header').css({
                    top: '0px'
                });
            } else {
                $('header').css({
                    top: '75px'
                });
            }        
    
        });
    }
    if(windowWidth <= 516) {
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            //console.log(scroll);
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
    if(windowWidth <= 377) {
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            //console.log(scroll);
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
    

    
});