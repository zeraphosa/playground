const { spawn, exec } = require("child_process");

const myEcho = spawn("cmd.exe", ["/c", "hi echo"]);
myEcho.stdout.on("data", (data) => {
  console.log("data", data);
});

// other.js isimli dosyayi calistir
const otherJs = exec("node other.js");
otherJs.stdout.on('data',(data)=>{
    console.log(data)
})

const desktop = exec("cd C:\\Users\\zaurs\\Desktop && dir");
desktop.stdout.on("data", (data) => {
  console.log("data", data);
});

// Steam uygulamasini calistir
const steam = exec("cd C:\\Program Files (x86)\\Steam && start Steam");

// Klasor olustur
const fnodejs = exec("cd C:\\Users\\zaurs\\Desktop && mkdir fromnodejs");

console.log("test", `cd C:\\Users\\zaurs\\Desktop\\code\\exercise_nodejs\\modules\\${process.argv[2]} && node ${process.argv[3]}.js`);
const executeOtherJsApp = exec(`cd C:\\Users\\zaurs\\Desktop\\code\\exercise_nodejs\\modules\\${process.argv[2]} && node ${process.argv[3]}.js`);
executeOtherJsApp.stdout.on("data", (data) => {
  console.log("data", data);
});
