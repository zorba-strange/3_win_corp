$(document).ready(function(){
    console.log('hello world');
    $('.home_slides').slick({
        autoplay: true,
        dots: true,
        speed: 3000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});

