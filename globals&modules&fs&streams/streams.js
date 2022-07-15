const fs = require("fs");

let readStream = fs.createReadStream("./docs/text.txt");
let writeStream = fs.createWriteStream('./docs/text4.txt');

// readStream.on('data', chunk => {
//     console.log(chunk.toString());
//     console.log("---NEW CHUNK---");
//     console.log(chunk);


//     writeStream.write(chunk);
// })      

// transfer
readStream.pipe(writeStream);