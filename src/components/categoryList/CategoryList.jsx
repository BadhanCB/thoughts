import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";

const getCategories = async () => {
    const res = await fetch("https://thoughts-sable.vercel.app/api/categories", {cache: "no-cache"});

    if (!res.ok) {
        throw new Error("Failed to fetch");
    }

    return res.json();
};

const CategoryList = async () => {
    const categories = await getCategories();

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Categories</h2>
            <div className={styles.categories}>
                {categories.length && categories?.map(cat => (
                    <Link
                        key={cat.id}
                        href={`/blog?cat=${cat.slug}`}
                        className={`${styles.category} ${styles.style}`}
                    >
                        <Image
                            src={cat.img}
                            alt={cat.title}
                            width={32}
                            height={32}
                            className={styles.image}
                        />
                        {cat.title}
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default CategoryList;
