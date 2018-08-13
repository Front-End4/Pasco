$(document).ready(function () {

    var headerSwiper = new Swiper('.swiper-container', {
        speed: 400,
        spaceBetween: 100,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    $('[data-fancybox="gallery"]').fancybox({
        beforeShow: function (instance, slide) {
            $(".galerry__item").css("position", "relative");
        },
        beforeClose: function () {
            $(".galerry__item").css("position", "absolute");
        }
    });
    $(".owl-carousel").owlCarousel({
        items: 7,
        loop: true,
    });
})