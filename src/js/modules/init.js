$(document).on('ready', function () {

    var headerSwiper = new Swiper('.swiper-container', {
        speed: 400,
        spaceBetween: 100,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
})