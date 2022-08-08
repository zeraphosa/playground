import React, { useEffect, useState } from "react";
export default function Test() {
  const [postID, set_postID] = useState(1);
  const [post, set_post] = useState(false);

  useEffect(() => {
    console.log("component ilk yuklendiginde calisir");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((json) => console.log(json));
    let interval = setInterval(() => console.log("interval calisti"), 1000);
    return () => {
      console.log("component destroyed");
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("count degeri degisti", postID);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
      .then((res) => res.json())
      .then((data) => set_post(data));
  }, [postID]);

  return (
    <div>
      <h3>{postID}</h3>
      {post && JSON.stringify(post)}
      <button onClick={() => set_postID(postID + 1)}>Sonraki konu</button>
      <hr />
      Test
    </div>
  );
}
