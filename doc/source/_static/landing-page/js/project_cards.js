const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  slidesPerGroup: 4, // 👈 slide 4 at a time
  spaceBetween: 20,
  loop: false, // keep false if you want real pagination
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1, slidesPerGroup: 1 } /* mobile */,
    768: { slidesPerView: 2, slidesPerGroup: 2 } /* tablet */,
    1024: { slidesPerView: 4, slidesPerGroup: 4 } /* desktop */,
  },
});
