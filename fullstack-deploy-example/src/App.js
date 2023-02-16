import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const url = "http://localhost:5600/";
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    async function fetchData(){
      try{
        const res = await axios.get(`${url}`);
        setData(res.data);
      }catch(err){
        console.log("gelmir:",err);
      }
    }
    fetchData();
  },[]);

  return (
    <div>
      {data.map((item)=>(
        <div key={item.id}>{item.text}</div>
      ))}
    </div>
  );
}
