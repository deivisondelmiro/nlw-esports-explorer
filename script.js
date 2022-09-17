var swiper1 = new Swiper(".swiper", {

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    mousewheel: true,
  breakpoints: {
    767: {
      slidesPerView: 3,
      setWrapperSize: true
    }
  }
});


var swiper2 = new Swiper(".swiper.swiper2", {

  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },

  mousewheel: true,
breakpoints: {
  767: {
    slidesPerView: 4,
    setWrapperSize: true
  }
}
});