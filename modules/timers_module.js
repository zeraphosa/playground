const timers = require("timers");

timers.setInterval(() => {
  console.log(new Date());
}, 1000);

timers.setTimeout(() => {
  console.log("5 saniye sonra calisiyor");
}, 5000);

console.log("merhaba");
timers.setImmediate(() => {
  console.log("selam");
});
console.log("merhaba_2 ");
