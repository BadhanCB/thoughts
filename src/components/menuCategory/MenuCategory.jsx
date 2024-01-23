import Link from "next/link";
import styles from "./menuCategory.module.css";

const MenuCategory = () => {
    return (
        <Link
            href="/blog?cat=style"
            className={`${styles.categoryItem} ${styles.style}`}
        >
            style
        </Link>
    );
};

export default MenuCategory;
