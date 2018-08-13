$(document).ready(function () {

    console.log(123);
    var headerSwiper = new Swiper('.swiper-container', {
        speed: 400,
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