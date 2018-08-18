$(document).ready(function () {

    console.log(123);
    var headerSwiper = new Swiper('.swiper-container', {
        speed: 400,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    $(".owl-carousel").owlCarousel({
        items: 7,
        loop: true,
    });
})