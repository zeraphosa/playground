import Link from "next/link";
import styles from "./page.module.css";

export default function Portfolio(){
    return(
        <div className={styles.container}>
            <h1 className={styles.selectTitle}>Choose a gallery</h1>
            <div className={styles.items}>
                <Link href="/portfolio/illustrations" className={styles.item}>
                    <span className={styles.title}>Illustrations</span>
                </Link>
                <Link href="/portfolio/website" className={styles.item}>
                    <span className={styles.title}>Websites</span>
                </Link>
                <Link href="/portfolio/applications" className={styles.item}>
                    <span className={styles.title}>Applications</span>
                </Link>
            </div>
        </div>
    )
}