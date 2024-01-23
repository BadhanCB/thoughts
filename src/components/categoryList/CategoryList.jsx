import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";

const CategoryList = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Categories</h2>
            <div className={styles.categories}>
                <Link
                    href="/blog?cat=style"
                    className={`${styles.category} ${styles.style}`}
                >
                    <Image
                        src="/images/style.png"
                        alt="style category"
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    Style
                </Link>
                <Link
                    href="/blog?cat=travel"
                    className={`${styles.category} ${styles.travel}`}
                >
                    <Image
                        src="/images/travel.png"
                        alt="travel category"
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    travel
                </Link>
                <Link
                    href="/blog?cat=coding"
                    className={`${styles.category} ${styles.coding}`}
                >
                    <Image
                        src="/images/coding.png"
                        alt="coding category"
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    coding
                </Link>
                <Link
                    href="/blog?cat=culture"
                    className={`${styles.category} ${styles.culture}`}
                >
                    <Image
                        src="/images/culture.png"
                        alt="culture category"
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    culture
                </Link>
                <Link
                    href="/blog?cat=fashion"
                    className={`${styles.category} ${styles.fashion}`}
                >
                    <Image
                        src="/images/fashion.png"
                        alt="fashion category"
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    fashion
                </Link>
                <Link
                    href="/blog?cat=food"
                    className={`${styles.category} ${styles.food}`}
                >
                    <Image
                        src="/images/food.png"
                        alt="food category"
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    food
                </Link>
            </div>
        </section>
    );
};

export default CategoryList;
