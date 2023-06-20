import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Blog() {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href="/blog/testId" className={styles.container} key={item.id}>
          <div className={styles.imgContainer}>
            <Image src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="blog img" width={400} height={250} className={styles.img} />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>Desc</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
