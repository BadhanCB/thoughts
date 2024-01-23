import Image from "next/image";
import styles from "./menuPost.module.css";
import Link from "next/link";

const MenuPost = ({ withImg }) => {
    return (
        <Link href="/" className={styles.item}>
            {withImg && (
                <div className={styles.itemImgWrapper}>
                    <Image
                        src="/images/p1.jpeg"
                        alt="item image"
                        fill
                        className={styles.itemImg}
                    />
                </div>
            )}
            <div className={styles.itemContent}>
                <p className={`${styles.category} ${styles.travel}`}>Travel</p>
                <h3 className={`${styles.itemTitle}`}>
                    Lorem ipsum dolor sit amet.
                </h3>
                <p className={styles.itemInfo}>
                    <span className={styles.username}>John Deo</span>
                    <span className={styles.date}> - 23.01.24</span>
                </p>
            </div>
        </Link>
    );
};

export default MenuPost;
