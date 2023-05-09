import express from "express";
import mysql from "mysql";
import cors from "cors";

const port = 8800;
const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "asdsda",
  database: "login-example",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  const q = "SELECT * FROM users";
  db.query(q,(err,data)=> {
    if(err) return res.json(err);
    return res.json(data);
  })
});

app.listen(port, () => {
  console.log("Connected to backend!");
});
