import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const FetchAllUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    FetchAllUsers();
  }, []);
  
  return (
    <div>
      <h1>HOME</h1>
      {users.map((item) => (
        <div key={item.id}>
          <p>{item.username}</p>
          <p>{item.email}</p>
          <p>{item.password}</p>
        </div>
      ))}
    </div>
  );
}
