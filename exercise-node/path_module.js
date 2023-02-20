const path = require("path");

console.log("ext:", path.extname("C:\\Users\\zaur\\Desktop\\exercise_nodejs\\2\\path_module.js"));
console.log("base:", path.basename("C:\\Users\\zaur\\Desktop\\exercise_nodejs\\2\\path_module.js", ".js"));
console.log("dir:", path.dirname("C:\\Users\\zaur\\Desktop\\exercise_nodejs\\2\\path_module.js"));

const pathFormat = path.format({
  root: "/test/asd/",
  name: "file",
  ext: ".txt",
});
console.log("pathFormat:", pathFormat);

console.log("join:", path.join("/abc", "test", "deneme/y", "z"));
console.log("parse:", path.parse("C:\\Users\\zaur\\Desktop\\exercise_nodejs\\2\\path_module.js"));
console.log("resolve:",path.resolve('/a','b','c'))
console.log("resolve:",path.resolve('/a','/b','c'))
console.log("resolve:",path.resolve('/a','/b','/c'))