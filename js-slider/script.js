const slider = document.getElementById("slider");
const images = ["ada.jpg", "alma.jpg", "autumn.jpg", "eynek.jpg", "ocean.jpg", "plaj.jpg", "sepit.jpg", "xezer.jpg"];
let x = 0;
let thumbs = document.createElement("div");
thumbs.classList.add("thumbs");
slider.appendChild(thumbs);
let timer = setTimeout(change, 0, 1);

for (let i = 0; i < images.length; i++) {
  let thumb = document.createElement("img");
  thumb.classList.add("thumb");
  // thumb.setAttribute("src", `./img/${images[i]}`);
  thumb.addEventListener("click", (e) => {
    thumbs.children[x].classList.remove("thumb-active");
    e.stopPropagation();
    x = i;
    change(0);
  });
  thumbs.appendChild(thumb);
}

slider.addEventListener("click", (e) => {
  console.log(e.pageX);
  if (e.pageX < window.innerWidth / 2) change(-1);
  else change(1);
});

function change(y) {
  clearTimeout(timer);
  let oldSelection = x;
  x += y;
  if (x > images.length - 1) x = 0;
  else if (x < 0) x = images.length - 1;
  slider.style.backgroundImage = `url('./img/${images[x]}')`;
  timer = setTimeout(change, 3000, 1);

  thumbs.children[oldSelection].classList.remove("thumb-active");
  thumbs.children[x].classList.add("thumb-active");
}
