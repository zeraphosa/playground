const bodyElement = document.querySelector("body");

class Toast {
  constructor(text, position, closeble, autoClose, duration) {
    this.text = text;
    this.position = position;
    this.closeble = closeble;
    this.autoClose = autoClose;
    this.duration = duration;
  }
  show() {
    bodyElement.innerHTML = `<div>${this.text}</div>`;
  }
}
