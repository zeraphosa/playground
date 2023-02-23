const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  const q = "SELECT * FROM deneme";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(process.env.PORT || 5600, () => {
  console.log("CONNECTED SERVER");
});
