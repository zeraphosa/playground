import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: "no-store" });
  if (!res.ok) {
    throw notFound();
  }
  return res.json();
}

export default async function BlogPost({ params }) {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis aliquid deleniti. Excepturi et beatae corporis possimus dolores aliquid doloribus facilis, aperiam voluptates, deleniti, ea delectus tempore sunt sit dolore!</p>
          <div className={styles.author}>
            <Image src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="author" width={40} height={40} className={styles.avatar} />
            <span className={styles.username}>Julia Hennie</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/2093323/pexels-photo-2093323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="post img" fill={true} className={styles.img} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem, ipsum dolor sit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos velit dolorum repellat maiores perspiciatis sapiente animi quam saepe odit molestiae, fugiat labore nesciunt alias quidem. Aspernatur sit minima minus iste! amet consectetur adipisicing elit. Optio, totam iure? Facere vero delectus ex,
          obcaecati voluptatibus itaque officiis voluptates repellendus omnis quam nesciunt fuga eveniet, rem nam sed quos.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit accusantium temporibus est magni quis eaque minima, qui veniam officia. Provident accusamus quis in. Aut reprehenderit sequi voluptatibus laborum labore dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, perferendis?
          Consequatur eum animi quis necessitatibus corrupti nostrum sit ipsum, quia voluptates, doloremque est repudiandae dolore voluptas praesentium, aut quo velit.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem itaque cum, odit nulla recusandae totam! Nobis consectetur cumque quibusdam natus temporibus repudiandae minus quisquam quia labore, dignissimos recusandae magnam?
        </p>
      </div>
    </div>
  );
}
