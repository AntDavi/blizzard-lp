var slide_thumbnail = new Swiper(".s-slide-thumbnail", {
    slidesPerView: 3,
    direction: 'vertical',
    spaceBetween: 20,
    watchSlidesProgress: true,
});

var slide_hero = new Swiper(".s-slide-hero", {
    effect: 'fade',
    thumbs: {
        swiper: slide_thumbnail,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    }
});