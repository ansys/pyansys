const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 20,
  loop: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1, slidesPerGroup: 1 },
    768: { slidesPerView: 2, slidesPerGroup: 2 },
    1024: { slidesPerView: 4, slidesPerGroup: 4 },
  },
});
