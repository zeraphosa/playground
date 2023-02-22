const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");

const app = express();
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Ze2871781O.!",
//     database: "deploy-test",
// });

app.use(express.json());
// app.use(cors());

app.get("/", (req, res) => {
  res.send("Working");
  // const q = "SELECT * FROM deneme";
  // db.query(q,(err,data)=>{
  //     if(err) return res.json(err);
  //     return res.json(data);
  // })
});

app.listen(process.env.PORT || 5600, () => {
  console.log("CONNECTED SERVER");
});
