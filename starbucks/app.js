const lnbLists = document.querySelectorAll(".item");
const inputIcon = document.querySelector(".search_li i");
const inputBox = document.querySelector("#gnb_search");

lnbLists.forEach((li) =>
  li.addEventListener("mouseenter", () => {
    li.children[1].style.display = "block";
  })
);

lnbLists.forEach((li) =>
  li.addEventListener("mouseleave", () => {
    li.children[1].style.display = "none";
  })
);

inputIcon.addEventListener("click", () => {
  inputBox.focus();
  inputIcon.style.opacity = 0;
});

inputBox.addEventListener("focus", () => {
  inputBox.style.width = "200px";
  inputIcon.style.opacity = 0;
  inputBox.placeholder = "통합검색";
});
inputBox.addEventListener("blur", () => {
  inputBox.style.width = "30px";
  inputIcon.style.opacity = 1;
  inputBox.placeholder = "";
});

new Swiper(".slides .swiper", {
  autoplay: true,
  slidesPerView: 2,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

const closePromo = document.querySelector(".up");
closePromo.addEventListener("click", () => {
  document.querySelector(".slides").classList.toggle("clicked");
});

window.addEventListener(
  "load",
  () => {
    setTimeout(() => {
      document.querySelector(".visual_title").style.opacity = 1;
    }, 600);
    setTimeout(() => {
      document.querySelector(".pro01").style.opacity = 1;
    }, 1000);
    setTimeout(() => {
      document.querySelector(".pro02").style.opacity = 1;
    }, 1700);
    setTimeout(() => {
      document.querySelector(".deco").style.opacity = 1;
    }, 2500);
  },
  { passive: true }
);

function optimize(cb) {
  let ticking = false;

  return () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        cb();
        ticking = false;
      });
    }
  };
}

//스크롤 이벤트,,,,,,,😭😭

window.addEventListener(
  "scroll",
  optimize(() => {
    if (window.pageYOffset >= 600) {
      document.querySelector(".badges").style.opacity = 0;
    } else {
      document.querySelector(".badges").style.opacity = 1;
    }

    const blendImg = document.querySelector(".blend_img");
    const blendText01 = document.querySelector(".text_img01");
    const blendText02 = document.querySelector(".text_img02");
    const blendBtn = document.querySelector(".blend_more");

    if (window.pageYOffset >= 1700) {
      blendImg.style.transform = "translateX(0)";
      blendImg.style.opacity = 1;

      blendText01.style.transform = "translateX(0)";
      blendText01.style.opacity = 1;
      blendText01.style.transition = "all 1.5s 0.8s";

      blendText02.style.transform = "translateX(0)";
      blendText02.style.opacity = 1;
      blendText02.style.transition = "all 1.5s 1.4s";

      blendBtn.style.transform = "translateX(0)";
      blendBtn.style.opacity = 1;
      blendBtn.style.transition = "all 1.5s 2.3s";
    } else {
      blendImg.style.transform = "translateX(-50%)";
      blendImg.style.opacity = 0;
      blendText01.style.transform = "translateX(50%)";
      blendText01.style.opacity = 0;
      blendText01.style.transition = "all 0.5s";

      blendText02.style.transform = "translateX(50%)";
      blendText02.style.opacity = 0;
      blendText02.style.transition = "all 0.5s";

      blendBtn.style.transform = "translateX(100%)";
      blendBtn.style.opacity = 0;
      blendBtn.style.transition = "all 0.5s";
    }

    const reserveLogo = document.querySelector(".reserve_logo");
    const reserveText = document.querySelector(".text_img");
    const reserveBtn = document.querySelector(".reserve_more");
    const reserveProduct = document.querySelector(".reserve_product");

    if (window.pageYOffset >= 1900) {
      reserveLogo.style.opacity = 1;
      reserveLogo.style.transform = "translateX(0)";

      reserveText.style.opacity = 1;
      reserveText.style.transform = "translateX(0)";
      reserveText.style.transition = "all 1.5s 0.8s";

      reserveBtn.style.opacity = 1;
      reserveBtn.style.transform = "translateX(0)";
      reserveBtn.style.transition = "all 1.5s 1.4s";

      reserveProduct.style.opacity = 1;
      reserveProduct.style.transform = "translateX(0)";
      reserveProduct.style.transition = "all 1.5s 2s";
    } else {
      reserveLogo.style.opacity = 0;
      reserveLogo.style.transform = "translateX(-50%)";

      reserveText.style.opacity = 0;
      reserveText.style.transform = "translateX(-30%)";
      reserveText.style.transition = "all 0.5s";

      reserveBtn.style.opacity = 0;
      reserveBtn.style.transform = "translateX(-50%)";
      reserveBtn.style.transition = "all 0.5s";

      reserveProduct.style.opacity = 0;
      reserveProduct.style.transform = "translateX(50%)";
      reserveProduct.style.transition = "all 0.5s";
    }

    const pickText01 = document.querySelector(".pick_img01");
    const pickText02 = document.querySelector(".pick_img02");
    const pickBtn = document.querySelector(".pick_more");

    if (window.pageYOffset >= 2500) {
      pickText01.style.opacity = 1;
      pickText01.style.transform = "translateX(0)";

      pickText02.style.opacity = 1;
      pickText02.style.transform = "translateX(0)";
      pickText02.style.transition = "all 1.5s 0.8s";

      pickBtn.style.opacity = 1;
      pickBtn.style.transform = "translateX(0)";
      pickBtn.style.transition = "all 1.5s 1.4s";
    } else {
      pickText01.style.opacity = 0;
      pickText01.style.transform = "translateX(-50%)";

      pickText02.style.opacity = 0;
      pickText02.style.transform = "translateX(-50%)";
      pickText02.style.transition = "all 0.5s";

      pickBtn.style.opacity = 0;
      pickBtn.style.transform = "translateX(-100%)";
      pickBtn.style.transition = "all 0.5s";
    }

    const circle01 = document.querySelector(".find_img01");
    const circle02 = document.querySelector(".find_img02");
    const findText01 = document.querySelector(".text01");
    const findText02 = document.querySelector(".text02");
    const findBtn = document.querySelector(".find_more");

    if (window.pageYOffset >= 3700) {
      circle01.style.opacity = 1;
      circle01.style.transform = "translateX(0)";

      circle02.style.opacity = 1;
      circle02.style.transform = "translateX(0)";
      circle02.style.transition = "all 1.5s 0.8s";

      findText01.style.opacity = 1;
      findText01.style.transform = "translateX(0)";

      findText02.style.opacity = 1;
      findText02.style.transform = "translateX(0)";
      findText02.style.transition = "all 1.5s 0.8s";

      findBtn.style.opacity = 1;
      findBtn.style.transform = "translateX(0)";
      findBtn.style.transition = "all 1.5s 2.1s";
    } else {
      circle01.style.opacity = 0;
      circle01.style.transform = "translateX(-50%)";

      circle02.style.opacity = 0;
      circle02.style.transform = "translateX(-50%)";
      circle02.style.transition = "all 0.5s";

      findText01.style.opacity = 0;
      findText01.style.transform = "translateX(50%)";

      findText02.style.opacity = 0;
      findText02.style.transform = "translateX(50%)";
      findText02.style.transition = "all 0.5s";

      findBtn.style.opacity = 0;
      findBtn.style.transform = "translateX(50%)";
      findBtn.style.transition = "all 0.8s";
    }
  }),
  { passive: true }
);

const eventSlide = document.querySelector(".notice_slide");
const slideNodes = document.querySelectorAll(".notice_slide p");
const cloneFirst = slideNodes[0].cloneNode(true);
const cloneLast = slideNodes[4].cloneNode(true);
let currentMove = 0;
eventSlide.append(cloneFirst);
eventSlide.insertBefore(cloneLast, slideNodes[0]);

console.log(currentMove);

setInterval(() => {
  currentMove += 60;
  eventSlide.style.transform = `translateY(-${currentMove}px)`;
  eventSlide.style.transition = "all 2s 1s";

  if (currentMove >= 300) {
    setTimeout(() => {
      eventSlide.style.transition = "none";
      currentMove = 0;
      eventSlide.style.transform = `translateY(-${currentMove})`;
    }, 2900);
    //300 좌표와 0좌표는 같은 내용이라 3초 안에 두개 다 보여줘야하는데 트랜지션이 끊기니까 앞 내용 2900밀리초동안 트랜지션하고 100밀리초동안 후다닥 넘겨버리는것
    //3000초로 맞춰버리면 변경이 늦어서 그다음 내용도 3초동안 더 보여주게됨
  }
}, 3000);
