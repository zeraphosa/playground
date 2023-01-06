const data = [
  {
    n: "1",
    i: "./assets/projects/1.png",
    c: "templates",
  },
  {
    n: "2",
    i: "./assets/projects/2.png",
    c: "templates",
  },

  {
    n: "5",
    i: "./assets/projects/5.png",
    c: "others",
  },
  {
    n: "6",
    i: "./assets/projects/6.png",
    c: "components",
  },
  {
    n: "7",
    i: "./assets/projects/7.png",
    c: "components",
  },
  {
    n: "28",
    i: "./assets/projects/28.png",
    c: "components",
  },
  {
    n: "Blog Template",
    i: "./assets/projects/blog-template.png",
    c: "components",
  },
  {
    n: "Blurry Loading",
    i: "./assets/projects/blurry-loading.png",
    c: "components",
  },
  {
    n: "Calculator",
    i: "./assets/projects/calculator.png",
    c: "components",
  },
  {
    n: "CityTab",
    i: "./assets/projects/citytab.png",
    c: "components",
  },
  {
    n: "Countdown",
    i: "./assets/projects/countdown.png",
    c: "components",
  },
  {
    n: "Expanding Cards",
    i: "./assets/projects/expanding-cards.png",
    c: "components",
  },
  {
    n: "Express Template",
    i: "./assets/projects/express-template.png",
    c: "components",
  },
  {
    n: "Form Wave Animation",
    i: "./assets/projects/form-wave-animation.png",
    c: "components",
  },
  {
    n: "Hidden Search Widget",
    i: "./assets/projects/hidden-search-widget.png",
    c: "components",
  },
  {
    n: "Progress Steps",
    i: "./assets/projects/progress-steps.png",
    c: "components",
  },
  {
    n: "Quiz App",
    i: "./assets/projects/quiz-app.png",
    c: "components",
  },
  {
    n: "Random Password",
    i: "./assets/projects/random-password.png",
    c: "components",
  },
  {
    n: "Random Photos",
    i: "./assets/projects/random-photos.png",
    c: "components",
  },
  {
    n: "Rotating Navigation",
    i: "./assets/projects/rotating-navigation.png",
    c: "components",
  },
  {
    n: "Scroll Snaps",
    i: "./assets/projects/scroll-snaps.png",
    c: "components",
  },
  {
    n: "Sound Board",
    i: "./assets/projects/sound-board.png",
    c: "components",
  },
  {
    n: "SpaceX Template",
    i: "./assets/projects/spacex-template.png",
    c: "components",
  },
  {
    n: "Split Landing Page",
    i: "./assets/projects/split-landing-page.png",
    c: "components",
  },
  {
    n: "Statistic Counter",
    i: "./assets/projects/statistic-counter.png",
    c: "components",
  },
  {
    n: "Todo App",
    i: "./assets/projects/todo-app.png",
    c: "components",
  },
  {
    n: "Verify Digit",
    i: "./assets/projects/verify-digit.png",
    c: "components",
  },
  {
    n: "Video Popup",
    i: "./assets/projects/video-popup.png",
    c: "components",
  },
];

const content = document.querySelector(".content");
content.innerHTML = data
  .map(
    (i) => `
  <div class="column ${i.c}">
    <div class="card">
      <img src=${i.i} alt="${i.i}"/>
    </div>
  </div>
`,
  )
  .join("");

var btnContainer = document.getElementById("btn_container");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
