const dns = require("dns");
const os = require("os");

dns.lookup("google.com", (err, adress, family) => {
  console.log("address:", adress, "family", family);
});

dns.resolve("google.com", (err, address) => {
  console.log("address:", address);
});

console.log("localIP:", dns.getServers());

dns.lookup(os.hostname(), (err, add, fm) => {
  console.log("add:", add);
  console.log("fm:", fm);
});
