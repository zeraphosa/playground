import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Add() {
  const [book, set_book] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    set_book((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function handleClick(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="form">
      <h1>Add new book</h1>
      <input onChange={handleChange} type="text" placeholder="title" name="title" />
      <input onChange={handleChange} type="text" placeholder="desc" name="desc" />
      <input onChange={handleChange} type="number" placeholder="price" name="price" />
      <input onChange={handleChange} type="text" placeholder="cover" name="cover" />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
