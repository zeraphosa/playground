"use client";
import styles from "./page.module.css";
import useSWR from "swr";

export default function Dashboard() {
  //   const [data, setData] = useState([]);
  //   const [err, setErr] = useState(false);
  //   const [isLoading, setIsLoading] = useState(false);

  //   useEffect(() => {
  //     async function getData() {
  //       setIsLoading(true);
  //       const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" });
  //       if (!res.ok) {
  //         setErr(true);
  //       }
  //       const data = await res.json();
  //       setData(data);
  //       setIsLoading(false);
  //     }
  //     getData();
  //   }, []);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);
  console.log(data)
  return <div className={styles.container}>Dashboard</div>;
}
