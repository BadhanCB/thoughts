import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
    const status = "authenticated";

    return (
        <section>
            <h3 className={styles.title}>Comments</h3>
            {status === "authenticated" ? (
                <form className={styles.commentForm}>
                    <textarea
                        name="comment"
                        id="comment"
                        placeholder="write your comment..."
                        className={styles.commentInput}
                    ></textarea>
                    <input type="submit" value="Comment" className={styles.commentSubmitBtn} />
                </form>
            ) : (
                <Link href="/login">Please login to comment...</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.singleComments}>
                    <div className={styles.commenter}>
                        <Image
                            src="/images/p1.jpeg"
                            alt="commenter img"
                            width={50}
                            height={50}
                            className={styles.commenterAvatar}
                        />
                        <div className={styles.commenterInfo}>
                            <h6 className={styles.commenterName}>John Deo</h6>
                            <p className={styles.commentDate}>20 April 2023</p>
                        </div>
                    </div>
                    <p className={styles.comment}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Non quis ipsam temporibus repellat ut quos optio
                        necessitatibus, numquam odio minus, consectetur esse
                        consequatur illum. Ut sequi asperiores ipsam! Quod,
                        quae.
                    </p>
                </div>
                <div className={styles.singleComments}>
                    <div className={styles.commenter}>
                        <Image
                            src="/images/p1.jpeg"
                            alt="commenter img"
                            width={50}
                            height={50}
                            className={styles.commenterAvatar}
                        />
                        <div className={styles.commenterInfo}>
                            <h6 className={styles.commenterName}>John Deo</h6>
                            <p className={styles.commentDate}>20 April 2023</p>
                        </div>
                    </div>
                    <p className={styles.comment}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Non quis ipsam temporibus repellat ut quos optio
                        necessitatibus, numquam odio minus, consectetur esse
                        consequatur illum. Ut sequi asperiores ipsam! Quod,
                        quae.
                    </p>
                </div>
                <div className={styles.singleComments}>
                    <div className={styles.commenter}>
                        <Image
                            src="/images/p1.jpeg"
                            alt="commenter img"
                            width={50}
                            height={50}
                            className={styles.commenterAvatar}
                        />
                        <div className={styles.commenterInfo}>
                            <h6 className={styles.commenterName}>John Deo</h6>
                            <p className={styles.commentDate}>20 April 2023</p>
                        </div>
                    </div>
                    <p className={styles.comment}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Non quis ipsam temporibus repellat ut quos optio
                        necessitatibus, numquam odio minus, consectetur esse
                        consequatur illum. Ut sequi asperiores ipsam! Quod,
                        quae.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Comments;
