const data = [
  {
    n: "1",
    i: "./assets/projects/1.png",
  },
  {
    n: "2",
    i: "./assets/projects/2.png",
  },

  {
    n: "5",
    i: "./assets/projects/5.png",
  },
  {
    n: "6",
    i: "./assets/projects/6.png",
  },
  {
    n: "7",
    i: "./assets/projects/7.png",
  },
  {
    n: "28",
    i: "./assets/projects/28.png",
  },
  {
    n: "Blog Template",
    i: "./assets/projects/blog-template.png",
  },
  {
    n: "Blurry Loading",
    i: "./assets/projects/blurry-loading.png",
  },
  {
    n: "Calculator",
    i: "./assets/projects/calculator.png",
  },
  {
    n: "CityTab",
    i: "./assets/projects/citytab.png",
  },
  {
    n: "Countdown",
    i: "./assets/projects/countdown.png",
  },
  {
    n: "Expanding Cards",
    i: "./assets/projects/expanding-cards.png",
  },
  {
    n: "Express Template",
    i: "./assets/projects/express-template.png",
  },
  {
    n: "Form Wave Animation",
    i: "./assets/projects/form-wave-animation.png",
  },
  {
    n: "Hidden Search Widget",
    i: "./assets/projects/hidden-search-widget.png",
  },
  {
    n: "Progress Steps",
    i: "./assets/projects/progress-steps.png",
  },
  {
    n: "Quiz App",
    i: "./assets/projects/quiz-app.png",
  },
  {
    n: "Random Password",
    i: "./assets/projects/random-password.png",
  },
  {
    n: "Random Photos",
    i: "./assets/projects/random-photos.png",
  },
  {
    n: "Rotating Navigation",
    i: "./assets/projects/rotating-navigation.png",
  },
  {
    n: "Scroll Snaps",
    i: "./assets/projects/scroll-snaps.png",
  },
  {
    n: "Sound Board",
    i: "./assets/projects/sound-board.png",
  },
  {
    n: "SpaceX Template",
    i: "./assets/projects/spacex-template.png",
  },
  {
    n: "Split Landing Page",
    i: "./assets/projects/split-landing-page.png",
  },
  {
    n: "Statistic Counter",
    i: "./assets/projects/statistic-counter.png",
  },
  {
    n: "Todo App",
    i: "./assets/projects/todo-app.png",
  },
  {
    n: "Verify Digit",
    i: "./assets/projects/verify-digit.png",
  },
  {
    n: "Video Popup",
    i: "./assets/projects/video-popup.png",
  },
];

const content = document.querySelector(".content");
content.innerHTML = data.map(
  (i) => `
<div class="card">
<img src=${i.i} alt="${i.i}"/>
</div>
`,
).join("");
