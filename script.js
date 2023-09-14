import Toast from "./toast.js";

// Toast(text, position, autoClose, duration, durationColor, borderWidth, borderColor, textColor, bgColor)
const myToast = new Toast(
    "Mission Success. Hope this message find you well",
    "top-center",
    true,
    5000,
    "red",
    "green",
    "#fff",
    "green"
);

myToast.show();
