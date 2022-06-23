const selectLibrary = document.querySelectorAll(".libraryBox > div");
const currentTitle = document.querySelector(".currentTitle");
const currentnewsTitle = document.querySelector(".currentnewsTitle");
const offdaySchedule = document.querySelector(".offdaySchedule");

let libArr = [
  {
    name: "창원중앙",
    offday: `<div>
    <h3>어린이자료실<br>생활문화공간 다락</h3>
    <p><span>월~목</span>09:00 ~ 22:00</p>
    <p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
    <h3>종합자료실<br>디지털‧연속간행물실</h3>
    <p><span>월~목</span>09:00 ~ 18:00</p>
    <p><span>토~일</span>09:00 ~ 18:00</p>
</div>
<div>
    <h3>자율학습실</h3>
    <p><span>월~일</span>08:00 ~ 22:00</p>
</div>`,
    loca1: 35.233485,
    loca2: 128.679022,
    imgSource: "../img/lib2.jpg",
    textColor: "white",
  },
  {
    name: "성산",
    offday: `<div>
    <h3>종합 자료실<br>연속간행물실</h3>
    <p><span>월~목</span>09:00 ~ 22:00</p>
    <p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
    <h3>유아‧어린이자료실<br>
    디지털‧다문화자료실</h3>
    <p><span>월~목</span>09:00 ~ 18:00</p>
    <p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
    <h3>자율학습실</h3>
    <p><span>월~일</span>08:00 ~ 22:00</p>
</div>`,
    loca1: 35.202041,
    loca2: 128.707206,
    imgSource: "../img/lib3.jpg",
  },
  {
    name: "상남",
    offday: `<div>
<h3>종합 자료실<br>디지털‧연속간행물실</h3>
<p><span>화~금</span>09:00 ~ 22:00</p>
<p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>유아‧어린이자료실</h3>
<p><span>화~일</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>자율학습실</h3>
<p><span>월~일</span>08:00 ~ 22:00</p>
</div>`,
    loca1: 35.213896,
    loca2: 128.695352,
    imgSource: "../img/lib4.jpg",
  },
  {
    name: "최윤덕",
    offday: `<div>
    <h3>어린이자료실</h3>
    <p><span>월~목</span>09:00 ~ 18:00</p>
    <p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
    <h3>종합자료실</h3>
    <p><span>월~목</span>09:00 ~ 22:00</p>
    <p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
    <h3>디지털자료실</h3>
    <p><span>월~목</span>09:00 ~ 18:00</p>
    <p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
    <h3>이룸(학습실)</h3>
    <p><span>월~일</span>08:00 ~ 22:00</p>
</div>`,
    loca1: 35.322956,
    loca2: 128.579755,
    imgSource: "../img/lib5.jpg",
  },
  {
    name: "고향의봄",
    offday: `<div>
<h3>참고ㆍ연속간행물실<br>
디지털자료실<br>
유아ㆍ어린이자료실</h3>
<p><span>화~일</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>종합자료실</h3>
<p><span>화~금</span>09:00 ~ 22:00</p>
<p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>자율학습실</h3>
<p><span>월~일</span>08:00 ~ 22:00</p>
</div>`,
    loca1: 35.256686,
    loca2: 128.618485,
    imgSource: "../img/lib6.jpg",
  },
  {
    name: "명곡",
    offday: `<div>
        <h3>어린이‧유아자료실</h3>
        <p><span>화~일</span>09:00 ~ 18:00</p>
    </div>
    <div>
        <h3>종합자료실, 연속간행물실</h3>
        <p><span>화~금</span>09:00 ~ 22:00</p>
        <p><span>주말</span>09:00 ~ 18:00</p>
    </div>
    <div>
        <h3>디지털자료실</h3>
        <p><span>화~일</span>09:00 ~ 18:00</p>
    </div>
    <div>
        <h3>자율학습실</h3>
        <p><span>월~일</span>09:00 ~ 22:00</p>
    </div>`,
    loca1: 35.253333,
    loca2: 128.648453,
    imgSource: "../img/lib7.jpg",
  },
  {
    name: "마산합포",
    offday: `<div>
    <h3>일반자료실<br>어린이자료실</h3>
    <p><span>월~목</span>09:00 ~ 22:00</p>
    <p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
    <h3>디지털자료실<br>
    종합자료실</h3>
    <p><span>월~목</span>09:00 ~ 18:00</p>
    <p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
    <h3>자율학습실</h3>
    <p><span>월~일</span>08:00 ~ 22:00</p>
</div>`,
    loca1: 35.183122,
    loca2: 128.562774,
    imgSource: "../img/lib8.jpg",
  },
  {
    name: "마산회원",
    offday: `<div>
<h3>어린이자료실</h3>
<p><span>화~일</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>제1·2자료실</h3>
<p><span>화~금</span>09:00 ~ 22:00</p>
<p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>자율학습실</h3>
<p><span>월~일</span>08:00 ~ 22:00</p>
</div>`,
    loca1: 35.224629,
    loca2: 128.573516,
    imgSource: "../img/lib9.jpg",
  },
  {
    name: "내서",
    offday: `<div>
<h3>어린이자료실<br>디지털‧연속간행물실</h3>
<p><span>월~목</span>09:00 ~ 18:00</p>
<p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>종합자료실‧디지털 및 연간물 코너</h3>
<p><span>월~목</span>09:00 ~ 22:00</p>
<p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>자율학습실</h3>
<p><span>월~일</span>09:00 ~ 22:00</p>
</div>`,
    loca1: 35.232838,
    loca2: 128.50133,
    imgSource: "../img/lib10.jpg",
  },
  {
    name: "중리초등",
    offday: `<div>
<h3>어린이자료실</h3>
<p><span>월~금</span>15:30 ~ 18:00</p>
<p><span>주말</span>09:00 ~ 18:00</p>
<p><span>방학</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>종합자료실</h3>
<p><span>월~금</span>15:30 ~ 18:00</p>
<p><span>주말</span>09:00 ~ 18:00</p>
<p><span>방학</span>09:00 ~ 18:00</p>
</div>
`,
    loca1: 35.255483,
    loca2: 128.519933,
    imgSource: "../img/lib12.jpg",
  },
  {
    name: "진해",
    offday: `<div>
<h3>어린이자료실</h3>
<p><span>화~금</span>09:00 ~ 22:00</p>
<p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>종합자료실</h3>
<p><span>화~금</span>09:00 ~ 22:00</p>
<p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>디지털자료실, 연속간행물실</h3>
<p><span>화~금</span>09:00 ~ 22:00</p>
<p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>자율학습실</h3>
<p><span>월~일</span>08:00 ~ 22:00</p>
<p><span>공휴일</span>08:00 ~ 22:00</p>
</div>`,
    loca1: 35.152537,
    loca2: 128.667531,
    imgSource: "../img/lib13.jpg",
  },
  {
    name: "동부",
    offday: `<div>
        <h3>어린이자료실<br>디지털‧연속간행물실</h3>
        <p><span>월~목</span>09:00 ~ 22:00</p>
        <p><span>주말</span>09:00 ~ 18:00</p>
        </div>
        <div>
        <h3>종합‧참고 / 연속간행물실</h3>
        <p><span>월~목</span>09:00 ~ 22:00</p>
        <p><span>주말</span>09:00 ~ 18:00</p>
        </div>
        <div>
        <h3>디지털자료실</h3>
        <p><span>월~목</span>09:00 ~ 22:00</p>
        <p><span>주말</span>09:00 ~ 18:00</p>
        </div>
        <div>
        <h3>자율학습실</h3>
        <p><span>월~일</span>08:00 ~ 22:00</p>
        </div>`,
    loca1: 35.100027,
    loca2: 128.81714,
    imgSource: "../img/lib14.jpg",
  },
];

const libInfo = document.querySelector(".pcLibInfo");
const pcHeader = document.querySelector(".pcHeader");
window.addEventListener(
  "resize",
  () => {
    if (window.innerWidth > 1280) {
      libInfo.style.left = (window.innerWidth - 1280) / 2 + "px";
    }
  },
  { passive: true }
);

window.addEventListener(
  "load",
  () => {
    if (window.innerWidth > 1280) {
      libInfo.style.left = (window.innerWidth - 1280) / 2 + "px";
    }
  },
  { passive: true }
);

selectLibrary.forEach((div) =>
  div.addEventListener("click", () => {
    for (let div of selectLibrary) {
      div.classList.remove("selected");
    }
    div.classList.add("selected");
    currentTitle.textContent = `${div.textContent}`;
    currentnewsTitle.textContent = `${div.textContent}`;
  })
);

const openTag = document.querySelector(".openTag");
const pcChangeLib = document.querySelectorAll(".changeCurLib ul li");
const pcLibInfo = document.querySelector(".pcLibInfo h3 span");
pcChangeLib.forEach((li, i) => {
  li.addEventListener("click", () => {
    for (let li of pcChangeLib) {
      li.classList.remove("selected");
    }
    li.classList.add("selected");
    pcLibInfo.textContent = libArr[i].name;
    offdaySchedule.innerHTML = libArr[i].offday;
    // changeLocation(i);
    changeImg(i);
  });
});

openTag.addEventListener("click", () => {
  document.querySelector(".changeCurLib").classList.toggle("open");
});

function changeLocation(index) {
  const changeGeo = new kakao.maps.LatLng(
    libArr[index].loca1,
    libArr[index].loca2
  );
  map.setCenter(changeGeo);
}
function changeImg(index) {
  const img = document.querySelector(".libImg img");
  img.src = libArr[index].imgSource;
}

let options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(35.202041, 128.707206), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

const mapBox = document.querySelector(".mapBox");
const map = new kakao.maps.Map(mapBox, options); //지도 생성
let markerPosition = new kakao.maps.LatLng(35.202041, 128.707206);
let marker = new kakao.maps.Marker({
  position: markerPosition,
});
marker.setMap(map);
