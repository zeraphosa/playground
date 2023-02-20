import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function Update() {
  const [book, set_book] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];
  console.log(bookId);

  function handleChange(e) {
    set_book((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function handleClick(e) {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/books/" + bookId, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="form">
      <h1>Update book</h1>
      <input onChange={handleChange} type="text" placeholder="title" name="title" />
      <input onChange={handleChange} type="text" placeholder="desc" name="desc" />
      <input onChange={handleChange} type="number" placeholder="price" name="price" />
      <input onChange={handleChange} type="text" placeholder="cover" name="cover" />
      <button onClick={handleClick} className="formButton">
        Update
      </button>
    </div>
  );
}
