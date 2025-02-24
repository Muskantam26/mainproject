var swiper = new Swiper(".mySwiper", {
  lazy: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// second section

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper1-pagination1",
    clickable: true,
  },
});