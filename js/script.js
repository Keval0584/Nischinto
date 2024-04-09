// Start S1

$(document).ready(function(){
    $("#s1").owlCarousel({
        items:4,
        margin:20,
        loop:true,
        dots:false,
        nav: true,
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
    })
    $('#s2').owlCarousel({
        items:3,
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        navText:['<i class="fa-solid fa-chevron-left service_pre_icon"></i>','<i class="fa-solid fa-chevron-right service_next_icon"></i>'],
    })
    $('#s3').owlCarousel({
        items:3,
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
    })
    $('#s4').owlCarousel({
        items:3,
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
    })

// End S1

$('.header_menu li > a').click(function() {
    $('.header_menu li > a').removeClass('active');
    $($(this).addClass('active'));
}); 

// strat header

    $(window).scroll(function(){
        var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

        if(scroll >= 1) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

// end header

// start backtotop

        var btn = $('.backtotop');
    btn.hide();
    $($(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            btn.fadeIn();
        } else {
            btn.fadeOut();
        }
    }));

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
// end backtotop

// start loader

$(document).ready(function(){
    setTimeout (function(){
        $('.st-perloader-in').fadeOut();
    },3000)
});
// end loader

// start aos animation

  AOS.init();

// end aos animation

});