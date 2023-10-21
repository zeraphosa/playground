const bodyEl = document.querySelector("body");
class Toast {
  constructor(text, position, closeble, autoClose, duration) {
    this.text = text;
    this.position = position;
    this.closeble = closeble;
    this.autoClose = autoClose;
    this.duration = duration;
  }
  show(){
    bodyEl.innerHTML = `<div>${this.text}</div>`
  }
}

let myToast = new Toast("Hello", "left", true, true, 1000);
myToast.show()