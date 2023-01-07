const data = [
  {
    n: "Potfolio Example 1",
    i: "./assets/projects/portfolio-example-1.png",
    c: "templates",
  },
  {
    n: "Portfolio Example 2",
    i: "./assets/projects/portfolio-example-2.png",
    c: "templates",
  },

  {
    n: "Buta Assignment 1",
    i: "./assets/projects/buta-assignment-1.png",
    c: "templates",
  },
  {
    n: "Buta Assignment 2",
    i: "./assets/projects/buta-assignment-2.png",
    c: "templates",
  },
  {
    n: "Buta Assignment 3",
    i: "./assets/projects/buta-assignment-3.png",
    c: "templates",
  },
  {
    n: "Blog Template",
    i: "./assets/projects/blog-template.png",
    c: "templates",
  },
  {
    n: "Blurry Loading",
    i: "./assets/projects/blurry-loading.png",
    c: "others",
  },
  {
    n: "Calculator",
    i: "./assets/projects/calculator.png",
    c: "others",
  },
  {
    n: "CityTab",
    i: "./assets/projects/citytab.png",
    c: "others",
  },
  {
    n: "Countdown",
    i: "./assets/projects/countdown.png",
    c: "others",
  },
  {
    n: "Expanding Cards",
    i: "./assets/projects/expanding-cards.png",
    c: "others",
  },
  {
    n: "Express Template",
    i: "./assets/projects/express-template.png",
    c: "templates",
  },
  {
    n: "Form Wave Animation",
    i: "./assets/projects/form-wave-animation.png",
    c: "others",
  },
  {
    n: "Hidden Search Widget",
    i: "./assets/projects/hidden-search-widget.png",
    c: "others",
  },
  {
    n: "Progress Steps",
    i: "./assets/projects/progress-steps.png",
    c: "others",
  },
  {
    n: "Quiz App",
    i: "./assets/projects/quiz-app.png",
    c: "others",
  },
  {
    n: "Random Password",
    i: "./assets/projects/random-password.png",
    c: "others",
  },
  {
    n: "Random Photos",
    i: "./assets/projects/random-photos.png",
    c: "others",
  },
  {
    n: "Rotating Navigation",
    i: "./assets/projects/rotating-navigation.png",
    c: "others",
  },
  {
    n: "Scroll Snaps",
    i: "./assets/projects/scroll-snaps.png",
    c: "others",
  },
  {
    n: "Sound Board",
    i: "./assets/projects/sound-board.png",
    c: "others",
  },
  {
    n: "SpaceX Template",
    i: "./assets/projects/spacex-template.png",
    c: "templates",
  },
  {
    n: "Split Landing Page",
    i: "./assets/projects/split-landing-page.png",
    c: "others",
  },
  {
    n: "Statistic Counter",
    i: "./assets/projects/statistic-counter.png",
    c: "others",
  },
  {
    n: "Todo App",
    i: "./assets/projects/todo-app.png",
    c: "others",
  },
  {
    n: "Verify Digit",
    i: "./assets/projects/verify-digit.png",
    c: "others",
  },
  {
    n: "Video Popup",
    i: "./assets/projects/video-popup.png",
    c: "others",
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
      <a class="card_link">
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
