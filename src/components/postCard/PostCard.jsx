import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';

const PostCard = () => {
    return (
        <div className={styles.post}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/p1.jpeg"
                            alt="post image"
                            fill
                            className={styles.postImg}
                        />
                    </div>
                    <div className={styles.postContent}>
                        <p className={styles.postInfo}>
                            <span className={styles.date}>23.01.24</span>
                            <span className={styles.category}>culture</span>
                        </p>
                        <Link href="/">
                            <h3 className={styles.postTitle}>
                                Lorem ipsum dolor sit amet.
                            </h3>
                        </Link>
                        <p className={styles.postDesc}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Tempore nulla sapiente sequi excepturi, a
                            eligendi nostrum obcaecati tempora labore molestiae
                            quos, quia vitae eveniet neque omnis natus enim
                            deleniti? Repellat!
                        </p>
                        <Link href="/" className={styles.link}>
                            Read More
                        </Link>
                    </div>
                </div>
    );
};

export default PostCard;