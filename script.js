const data = [
  {
    n: "Portfolio v3",
    i: "./assets/projects/portfolio-template-3.png",
    c: "templates",
    l: "./projects/portfolio-template-3/index.html"
  },
  {
    n: "Potfolio v2",
    i: "./assets/projects/portfolio-template-2.png",
    c: "templates",
    l: "./projects/portfolio-template-2/index.html"
  },
  {
    n: "Portfolio v1",
    i: "./assets/projects/portfolio-template-1.png",
    c: "templates",
    l: "./projects/portfolio-template-1/index.html"
  },
  {
    n: "Buta Assignment 1",
    i: "./assets/projects/buta-assignment-1.png",
    c: "templates",
    l: "./projects/buta-assignment-1/index.html"
  },
  {
    n: "Buta Assignment 2",
    i: "./assets/projects/buta-assignment-2.png",
    c: "templates",
    l: "./projects/buta-assignment-2/index.html"
  },
  {
    n: "Buta Assignment 3",
    i: "./assets/projects/buta-assignment-3.png",
    c: "templates",
    l: "./projects/buta-assignment-3/index.html"
  },
  {
    n: "Blog Template",
    i: "./assets/projects/blog-template.png",
    c: "templates",
    l: "./projects/blog-template/index.html"
  },
  {
    n: "Blurry Loading",
    i: "./assets/projects/blurry-loading.png",
    c: "others",
    l: "./projects/blurry-loading/index.html"
  },
  {
    n: "Calculator",
    i: "./assets/projects/calculator.png",
    c: "others",
    l: "./projects/calculator.html"
  },
  {
    n: "CityTab",
    i: "./assets/projects/citytab.png",
    c: "others",
    l: "./projects/citytab.html"
  },
  {
    n: "Countdown",
    i: "./assets/projects/countdown.png",
    c: "others",
    l: "./projects/countdown.html"
  },
  {
    n: "Expanding Cards",
    i: "./assets/projects/expanding-cards.png",
    c: "others",
    l: "./projects/expanding-cards.html"
  },
  {
    n: "Express Template",
    i: "./assets/projects/express-template.png",
    c: "templates",
    l: "./projects/express-template/index.html"
  },
  {
    n: "Form Wave Animation",
    i: "./assets/projects/form-wave-animation.png",
    c: "others",
    l: "./projects/form-wave-animation.html"
  },
  {
    n: "Hidden Search Widget",
    i: "./assets/projects/hidden-search-widget.png",
    c: "others",
    l: "./projects/hidden-search-widget.html"
  },
  {
    n: "Progress Steps",
    i: "./assets/projects/progress-steps.png",
    c: "others",
    l: "./projects/progress-steps.html"
  },
  {
    n: "Quiz App",
    i: "./assets/projects/quiz-app.png",
    c: "others",
    l: "./projects/quiz-app/index.html"
  },
  {
    n: "Random Password",
    i: "./assets/projects/random-password.png",
    c: "others",
    l: "./projects/random-password.html"
  },
  {
    n: "Random Photos",
    i: "./assets/projects/random-photos.png",
    c: "others",
    l: "./projects/random-photos.html"
  },
  {
    n: "Rotating Navigation",
    i: "./assets/projects/rotating-navigation.png",
    c: "others",
    l: "./projects/rotating-navigation.html"
  },
  {
    n: "Scroll Snaps",
    i: "./assets/projects/scroll-snaps.png",
    c: "others",
    l: "./projects/scroll-snaps.html"
  },
  {
    n: "Sound Board",
    i: "./assets/projects/sound-board.png",
    c: "others",
    l: "./projects/sound-board/index.html"
  },
  {
    n: "SpaceX Template",
    i: "./assets/projects/spacex-template.png",
    c: "templates",
    l: "./projects/spacex-template/index.html"
  },
  {
    n: "Split Landing Page",
    i: "./assets/projects/split-landing-page.png",
    c: "others",
    l: "./projects/split-landing-page/index.html"
  },
  {
    n: "Statistic Counter",
    i: "./assets/projects/statistic-counter.png",
    c: "others",
    l: "./projects/statistic-counter.html"
  },
  {
    n: "Todo App",
    i: "./assets/projects/todo-app.png",
    c: "others",
    l: "./projects/todo-app.html"
  },
  {
    n: "Verify Digit",
    i: "./assets/projects/verify-digit.png",
    c: "others",
    l: "./projects/verify-digit.html"
  },
  {
    n: "Video Popup",
    i: "./assets/projects/video-popup.png",
    c: "others",
    l: "./projects/video-popup/index.html"
  },
  {
    n: "Scroll Animation",
    i: "./assets/projects/scroll-animation.png",
    c: "others",
    l: "./projects/scroll-animation.html"
  },
  {
    n: "Drag & Drop file Upload",
    i: "./assets/projects/drag-drop.png",
    c: "others",
    l: "./projects/drag-drop.html"
  },
];

const content = document.querySelector(".content");
var btnContainer = document.getElementById("btn_container");
var btns = btnContainer.getElementsByClassName("btn");

content.innerHTML = data
  .map(
    (i) => `
  <div class="column ${i.c}">
    <div class="card">
      <a class="card_link" target="_blank" href="${i.l}">
        <img class="card_img" src=${i.i} alt="${i.i}"/>
        <h3 class="card_text">${i.n}</h3>
      </a>
    </div>
  </div>
`,
  )
  .join("");

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
