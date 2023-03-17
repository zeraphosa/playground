const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "created user on plesk",
  password: "created pass on plesk",
  database: "database name",
});
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  const q = "SELECT * FROM test";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(process.env.PORT || 5600, () => {
  console.log("NODE SIDE WORKING");
});
