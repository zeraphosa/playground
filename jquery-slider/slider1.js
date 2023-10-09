$(() => {
  const path = "./img/";
  const images = ["alma.jpg", "xezer.jpg", "ada.jpg", "ocean.jpg", "plaj.jpg", "sepit.jpg", "eynek.jpg", "autumn.jpg"];
  const slider = $("#slider");
  let x = 0;

  slider
    .css({ position: "relative" })
    .append(`<div id="slide"></div>`)
    .append(`<div id="thumbs"></div>`)
    .click((e) => {
      if (e.pageX > $(window).width() / 2) change(1);
      else change(-1);
    });

  const slide = $("#slide");
  slide.css({
    position: "absolute",
    width: "100%",
    height: "100%",
  });
  const thumbs = $("#thumbs");
  thumbs.css({
    position: "absolute",
    width: "100%",
    bottom: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
  });
  images.forEach((img) => thumbs.append(`<img src="${path}${img}" alt="t" />`));
  thumbs
    .children()
    .css({
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      border: "1px solid #fff",
      boxShadow: `0 0 5px #333`,
      margin: "5px",
      objectFit: "cover",
      cursor: "pointer",
    })
    .click(function (e) {
      e.stopPropagation();
      x = $(this).index();
      change(0);
    });

  let timer = setTimeout(change, 0, 0);

  function change(dir) {
    clearTimeout(timer);
    x += dir;
    if (x < 0) x = images.length - 1;
    if (x > images.length - 1) x = 0;
    slide.fadeOut(500, function () {
      $(this)
        .css({
          background: `url(${path}${images[x]}) center/cover`,
        })
        .fadeIn(500, () => {
          slider.css({ background: `url(${path}${images[x]}) center/cover` });
        });
    });
    timer = setTimeout(change, 3000, 1);
  }
});
