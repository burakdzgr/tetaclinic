const swiper = new Swiper(".mySwiper", {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
        delay: 3000,
    },
  })