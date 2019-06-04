$('.owl-carousel').owlCarousel({
    loop:true,
    center: true,
    items:1,
    margin:30,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }

})
AOS.init();

