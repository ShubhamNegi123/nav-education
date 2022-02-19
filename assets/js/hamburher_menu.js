function hamburger_menu(){   
    $('.nav-close-button').css({
        display: 'block'
    })

    $('.nav-bar-tabs').css({
        transition: 'all .5s ease',
        width: '150vw',
        height: '150vh',
    },function(){
        $('.nav-bar-tabs ul').css({
            transition: 'all .5s ease',
            opacity: '1',
            visibility: 'visible'
        });
    });
    

}   
function close_Hamburger_menu(){
    $('.nav-bar-tabs').css({
        transition: 'all .5s ease',
        width: '0vw',
        height: '0vh',
    });  
    $('.nav-close-button').css({
        display: 'none'
    })

    
} 