import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>©2023 Zeragency. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="zeragency facebook" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="zeragency instagram" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="zeragency twitter" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="zeragency youtube" />
      </div>
    </div>
  );
}
