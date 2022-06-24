const topBtn = document.querySelector(".top_btn");

topBtn.addEventListener("click", () => {
  gsap.to(window, 0.5, {
    scrollTo: 0,
  });
});

const badge = document.querySelector(".badge");
window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    gsap.to(badge, 0.3, {
      opacity: 0,
    });
  } else {
    gsap.to(badge, 0.3, {
      opacity: 1,
    });
  }
});

const visualElements = document.querySelectorAll(".visual_main div");

visualElements.forEach((el, i) => {
  gsap.to(el, 2, {
    delay: i * 0.5,
    opacity: 1,
  });
});

new Swiper(".notice .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion_swiper .swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".promotion_swiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
