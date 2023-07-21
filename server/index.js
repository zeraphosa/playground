const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ze2871781O.!",
  database: "mydoner",
});

app.use(express.json());
app.use(cors());

app.get("/today", (req, res) => {
  const q = "SELECT * FROM daily";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/today", (req, res) => {
  const q = "INSERT INTO daily (`products`,`isPackage`,`totalPrice`) VALUES (?)";
  const values = [req.body.products, req.body.isPackage, req.body.totalPrice];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("order created successfully");
  });
});

app.listen(process.env.PORT || 5600, () => {
  console.log("Connected to server!");
});
