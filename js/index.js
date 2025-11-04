// Swiper # 1
// For ALL main gallery swipers (swiper1 through swiper5)
const swiper = new Swiper(".swiper1", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1, 

  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    660: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
    940: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 1, 
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 1,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 50,
      slidesPerGroup: 1,
    },
    1700: {
      slidesPerView: 4,
      spaceBetween: 50,
      slidesPerGroup: 1,
    }
  },
  navigation: {
    nextEl: ".swiper-btn-next1",
    prevEl: ".swiper-btn-prev1",
  },
});

// Swiper #2
const swipe2 = new Swiper(".swiper2", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    660: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
    940: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 1,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 1,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 50,
      slidesPerGroup: 1,
    },
    1700: {
      slidesPerView: 4,
      spaceBetween: 50,
      slidesPerGroup: 1,
    }
  },
  navigation: {
    nextEl: ".swiper-btn-next2",
    prevEl: ".swiper-btn-prev2",
  },
});

// Swiper # 3
const swipe3 = new Swiper(".swiper3", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    660: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
    940: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 1,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 1,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 50,
      slidesPerGroup: 1,
    },
    1700: {
      slidesPerView: 4,
      spaceBetween: 50,
      slidesPerGroup: 1,
    }
  },
  navigation: {
    nextEl: ".swiper-btn-next3",
    prevEl: ".swiper-btn-prev3",
  },
});

// Swiper # 4
const swipe4 = new Swiper(".swiper4", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    660: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
    940: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 1,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 1,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 50,
      slidesPerGroup: 1,
    },
    1700: {
      slidesPerView: 4,
      spaceBetween: 50,
      slidesPerGroup: 1,
    }
  },
  navigation: {
    nextEl: ".swiper-btn-next4",
    prevEl: ".swiper-btn-prev4",
  },
});

// Swiper # 5
const swipe5 = new Swiper(".swiper5", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    660: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
    940: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 1,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 1,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 50,
      slidesPerGroup: 1,
    },
    1700: {
      slidesPerView: 4,
      spaceBetween: 50,
      slidesPerGroup: 1,
    }
  },
  navigation: {
    nextEl: ".swiper-btn-next5",
    prevEl: ".swiper-btn-prev5",
  },
});

// Modal swipers (keep as before)
const swipemodal1 = new Swiper(".swiper-modal1", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-modal-btn-next1",
    prevEl: ".swiper-modal-btn-prev1",
  },
});

const swipemodal2 = new Swiper(".swiper-modal2", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-modal-btn-next2",
    prevEl: ".swiper-modal-btn-prev2",
  },
});

const swipemoda3 = new Swiper(".swiper-modal3", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-modal-btn-next3",
    prevEl: ".swiper-modal-btn-prev3",
  },
});

const swipemodal4 = new Swiper(".swiper-modal4", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-modal-btn-next4",
    prevEl: ".swiper-modal-btn-prev4",
  },
});

const swipemodal5 = new Swiper(".swiper-modal5", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-modal-btn-next5",
    prevEl: ".swiper-modal-btn-prev5",
  },
});