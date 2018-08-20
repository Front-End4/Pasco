$(document).ready(function () {

    console.log(123);
    var headerSwiper = new Swiper('.swiper-container', {
        speed: 400,
        navigation: {
            nextEl: '.js-slider-button-next',
            prevEl: '.js-slider-button-prev',
        }
    });
    $(".owl-carousel").owlCarousel({
        items: 7,
        loop: true,
        dots: false,
    });
})