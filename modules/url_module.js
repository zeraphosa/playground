const url = require("url");

const my_url = new URL("https://www.google.com.tr/?searchQ=abc");

console.log("href:", my_url.href);
console.log("origin:", my_url.origin);
console.log("pathname:", my_url.pathname);
console.log("hash:", my_url.hash);
console.log("hostname:", my_url.hostname);
console.log("port:", my_url.port);
console.log("protocol:", my_url.protocol);
console.log("searchParams:", my_url.searchParams.get("searchQ"));
console.log("searchParams:", my_url.searchParams.has("searchQ"));

const adress = "https://localhost:4545/abc/?ad=zaur&soyad=sharifov";
console.log(url.parse(adress));
