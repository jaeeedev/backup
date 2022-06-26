const monthlyBtn = document.querySelector(".switch_month");
const bestBtn = document.querySelector(".switch_best");
const btnBg = document.querySelector(".switch_bg");

bestBtn.addEventListener("click", () => {
  btnBg.classList.toggle("active");
});
monthlyBtn.addEventListener("click", () => {
  btnBg.classList.toggle("active");
});
