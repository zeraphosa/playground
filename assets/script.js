const slider = document.getElementById("slider");
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");

let x = 1;

function changeSlide() {
  x++;
  if (x == 4) x = 1;
  slider.style.backgroundImage = `url('./assets/img/slide${x}.jpg')`;
  if (x == slide1.getAttribute("data-slide")) {
    slide1.style.display = "flex";
    slide2.style.display = "none";
    slide3.style.display = "none";
  } else if (x == slide2.getAttribute("data-slide")) {
    slide2.style.display = "flex";
    slide1.style.display = "none";
    slide3.style.display = "none";
  } else if (x == slide3.getAttribute("data-slide")) {
    slide3.style.display = "flex";
    slide2.style.display = "none";
    slide1.style.display = "none";
  }
}

setInterval(changeSlide, 4000);

// const menubtn = document.getElementById("menubtn");
// const menu = document.getElementById("menu");
// const closebtn = document.getElementById("closebtn");

// menubtn.addEventListener("click", () => {
//   menu.classList.toggle("active");
//   menubtn.classList.toggle("closeicon");
//   menubtn.className == "menuicon"
//     ? (menubtn.innerHTML = `
//     <i class="fa-solid fa-bars"></i>
//     `)
//     : (menubtn.innerHTML = `
//     <i class="fa-solid fa-xmark"></i>
//  `);
// });

// var autoslider = autoslider || {
//   el: {
//     slides: document.getElementsByClassName("slide"),
//   },

//   defaultDuration: 2000,

//   init: function () {
//     console.log("ini");

//     this.current = 0;
//     this.max = this.el.slides.length - 1;
//     this.timer = this.getTimerValue(this.current);
//     this.next();
//   },

//   next: function () {
//     var that = this,
//       nextIndex = this.current + 1;

//     if (this.current === this.max) {
//       nextIndex = 0;
//     }

//     this.timer = this.getTimerValue(this.current);

//     setTimeout(
//       function () {
//         that.changeSlide(nextIndex);
//         that.current = nextIndex;
//         that.next();
//       },
//       this.timer,
//       nextIndex,
//     );
//   },

//   changeSlide: function (nextIndex) {
//     this.el.slides[this.current].classList.remove("active");
//     this.el.slides[nextIndex].classList.add("active");
//   },

//   getTimerValue: function (index) {
//     return this.el.slides[index].dataset.duration || this.defaultDuration;
//   },
// };
// autoslider.init();
