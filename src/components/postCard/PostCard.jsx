import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
    const { slug, title, desc, catSlug, createdAt, img } = post;

    return (
        <div className={styles.post}>
            <div className={styles.imageWrapper}>
                <Image
                    src={img ? img : "/images/p1.jpeg"}
                    alt="post image"
                    fill
                    className={styles.postImg}
                />
            </div>
            <div className={styles.postContent}>
                <p className={styles.postInfo}>
                    <span className={styles.date}>
                        {new Date(createdAt).toDateString()}
                    </span>
                    {" | "}
                    <span className={styles.category}>{catSlug}</span>
                </p>
                <Link href={`/blog/${slug}`}>
                    <h3 className={styles.postTitle}>{title}</h3>
                </Link>
                <div className={styles.postDesc} dangerouslySetInnerHTML={{__html: desc.slice(0, 300)}} />
                <Link href={`/blog/${slug}`} className={styles.link}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
