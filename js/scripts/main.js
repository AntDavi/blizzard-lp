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

const allFilter = document.querySelectorAll('.js-nav-games li a');

const tabPane = document.querySelectorAll('.tab-pane-games')

allFilter.forEach((filter, index) => {
    filter.addEventListener('click', (event) => {
        event.preventDefault();
        
        allFilter.forEach(item => {
            item.classList.remove('active');
        })

        tabPane.forEach(tab => {
            tab.classList.remove('active');
        })

        tabPane[index].classList.add('active')
        filter.classList.add('active');
    });
});

const btnOpenModal = document.querySelector(".js-open-modal");
const btnCloseModal = document.querySelector(".js-close-modal");

btnOpenModal.addEventListener('click', (event) => {
    event.preventDefault();
    let tagHtml = document.documentElement;
    tagHtml.classList.add('show-modal')
});

btnCloseModal.addEventListener('click', () => {
    let tagHtml = document.documentElement;
    tagHtml.classList.remove('show-modal')
});
