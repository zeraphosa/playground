class Toast {
  constructor(text, position, closeble, autoClose, duration, borderWidth, borderColor, textColor, bgColor) {
    this.text = text;
    this.position = position;
    this.closeble = closeble;
    this.autoClose = autoClose;
    this.duration = duration;
    this.borderColor = borderColor;
    this.borderWidth = borderWidth;
    this.textColor = textColor;
    this.bgColor = bgColor;
  }
  show() {
    document.body.innerHTML = `
        <div id="toast">
            <p>${this.text}</p>
            <span>
                <svg id="icon" fill='${this.textColor}' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 38.982422 6.9707031 A 2.0002 2.0002 0 0 0 37.585938 7.5859375 L 24 21.171875 L 10.414062 7.5859375 A 2.0002 2.0002 0 0 0 8.9785156 6.9804688 A 2.0002 2.0002 0 0 0 7.5859375 10.414062 L 21.171875 24 L 7.5859375 37.585938 A 2.0002 2.0002 0 1 0 10.414062 40.414062 L 24 26.828125 L 37.585938 40.414062 A 2.0002 2.0002 0 1 0 40.414062 37.585938 L 26.828125 24 L 40.414062 10.414062 A 2.0002 2.0002 0 0 0 38.982422 6.9707031 z"/></svg>
            </span>
        </div>
    `;
    const toast = document.getElementById("toast");
    const icon = document.getElementById("icon");
    toast.style.display = "flex";
    toast.style.alignItems = "center";
    toast.style.gap = "20px";
    toast.style.cursor = "pointer";
    toast.style.position = "fixed";
    toast.style.paddingInline = "20px";
    toast.style.borderRadius = "10px";
    toast.style.borderStyle = "solid";
    toast.style.borderWidth = this.borderWidth;
    toast.style.borderColor = this.borderColor;
    toast.style.color = this.textColor;
    toast.style.backgroundColor = this.bgColor;
    if (this.position === "top-left") {
      toast.style.top = "10px";
      toast.style.left = "10px";
    } else if (this.position === "top-right") {
      toast.style.top = "10px";
      toast.style.right = "10px";
    } else if (this.position === "top-center") {
      toast.style.top = "10px";
      toast.style.left = "50%";
      toast.style.transform = "translate(-50%)";
    } else if (this.position === "bottom-left") {
      toast.style.bottom = "10px";
      toast.style.left = "10px";
    } else if (this.position === "bottom-center") {
      toast.style.bottom = "10px";
      toast.style.left = "50%";
      toast.style.transform = "translate(-50%)";
    } else {
      toast.style.bottom = "10px";
      toast.style.right = "10px";
    }

    icon.style.width = "16px";
    icon.style.height = "16px";
    icon.style.cursor = "pointer";
    icon.addEventListener("click", () => this.close());
    toast.addEventListener("click", () => this.close());
  }
  close() {
    console.log("closed");
  }
}

export default Toast