const monthlyBtn = document.querySelector(".switch_month");
const bestBtn = document.querySelector(".switch_best");
const btnBg = document.querySelector(".switch_bg");

bestBtn.addEventListener("click", () => {
  btnBg.classList.toggle("active");
  document.querySelector(".best_busan").classList.toggle("none");
  document.querySelector(".monthly_busan").classList.toggle("none");
});
monthlyBtn.addEventListener("click", () => {
  btnBg.classList.toggle("active");
  document.querySelector(".best_busan").classList.toggle("none");
  document.querySelector(".monthly_busan").classList.toggle("none");
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
  },
});
