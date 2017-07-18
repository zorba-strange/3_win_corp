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

const black_logo = document.getElementById('logo_image_black');
black_logo.addEventListner('mouseover', function() {
    console.log('over');
    this.src = '../new_images/3Win-Blue.png';
});

