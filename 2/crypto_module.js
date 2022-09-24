const crypto = require("crypto");

const secretKey = "password12345_!";
const hash = crypto.createHash("sha512", secretKey).update("mypass").digest("hex");
console.log("hash:", hash);
