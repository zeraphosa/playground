const bodyElement = document.querySelector("body");

class Toast {
  constructor(text, position, closeble, autoClose, duration, borderWidth, borderColor) {
    this.text = text;
    this.position = position;
    this.closeble = closeble;
    this.autoClose = autoClose;
    this.duration = duration;
    this.borderColor = borderColor;
    this.borderWidth = borderWidth;
  }
  show() {
    bodyElement.innerHTML = `<div id="toast">${this.text}</div>`;
    const toast = document.getElementById("toast");
    toast.style.display = "inline-block";
    toast.style.paddingBlock = "15px";
    toast.style.paddingRight = "80px";
    toast.style.paddingLeft = "10px";
    toast.style.borderWidth = this.borderWidth;
    toast.style.borderStyle = "solid";
    toast.style.borderColor = this.borderColor;
    toast.style.position = this.position;
    toast.style.borderRadius = '10px'
  }
}

let myToast = new Toast("Hello", "right", true, false, 2000, 5, "red");
myToast.show();
