const swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slideActiveClass: "active",
    pagination: {
        el: ".pagination",
        clickable: true
    },
    autoplay: {
        enabled: true,
        delay: 5000
    },
});