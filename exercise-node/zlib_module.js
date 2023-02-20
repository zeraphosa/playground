const zlib = require("zlib");
const fs = require("fs");

const gzip = zlib.createGzip();
const inp = fs.createReadStream("test.txt");
const out = fs.createWriteStream("test.txt.gz");

inp.on("data", (d) => {
  console.log("d:", d.toString());
});

inp.pipe(gzip).pipe(out);

