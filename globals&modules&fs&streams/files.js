// let os = require('os');
// console.log(os);

let fs = require("fs");
// console.log(fs);
// fs.readFile('./docs/text.txt', (err, data)=> {
//     if(err) throw err;
//     console.log(data.toString());
// })
// fs.writeFile('./docs/text2.txt','sa tekrar', (err, data)=>{
//     if(err) throw err;
//     console.log(data);
// })

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) throw err;
    console.log("klasor olustu");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) throw err;
    console.log("klasor silindi");
  });
}

fs.unlink('./docs/text2.txt', err => {
    if(err) throw err;
    console.log('dosya silindi');
})