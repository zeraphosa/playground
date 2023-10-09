const slider = document.getElementById("slider");
const images = ["ada.jpg", "alma.jpg", "autumn.jpg", "eynek.jpg", "ocean.jpg", "plaj.jpg", "sepit.jpg", "xezer.jpg"];
let x = 0;
let thumbs = document.createElement("div");
thumbs.classList.add("thumbs");
slider.appendChild(thumbs);

for (let i = 0; i < images.length; i++) {
  let thumb = document.createElement("img");
  thumb.classList.add("thumb");
  thumb.setAttribute("src", `./img/${images[i]}`);
  thumb.addEventListener("click", (e) => {
    e.stopPropagation();
    x = i
    change(0);
  });
  thumbs.appendChild(thumb);
}

slider.addEventListener("click", (e) => {
  console.log(e.pageX);
  if (e.pageX < window.innerWidth / 2) change(-1);
  else change(1);
});

let timer = setTimeout(change, 0, 1);

function change(status) {
  clearTimeout(timer);
  x += status;
  if (x > images.length - 1) x = 0;
  else if (x < 0) x = images.length - 1;
  slider.style.backgroundImage = `url('./img/${images[x]}')`;
  timer = setTimeout(change, 3000, 1);
}
