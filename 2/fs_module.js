const fs = require("fs");

fs.writeFile("index.txt", "Hello Nodejs", (err) => {
  console.log(err);
});

for (let i = 0; i < 20; i++) {
  fs.appendFile("index.txt", "\n Hi there \n", (err) => {
    console.log(err);
  });
}

fs.open("index.txt", "w", () => {
  console.log("dosya acildi");
});

fs.readFile("index.txt", (err, data) => {
  console.log("index", data.toString());
});

fs.unlink("index.txt", (err) => {
  console.log(err);
});

fs.copyFile("index.txt", "index2.txt", () => {});
fs.rename("index.txt", "deneme.txt", () => {});
fs.mkdir("a/b/c", { recursive: true }, () => {});

fs.opendir("./", async (err, data) => {
  for await (const d of data) {
    console.log("name:", d.name, "isFile:", d.isFile(), "isDic:", d.isDirectory());
  }
});

fs.readdir("./", (err, files) => {
  console.log("files", files);
});

console.log(fs.existsSync("fs_module.js"));

fs.stat("index.txt", (err, stats) => {
  console.log("stats", stats);
});

fs.watchFile("index.txt", (curr, prev) => {
  console.log("curr:", curr);
  console.log("prev:", prev);
});
