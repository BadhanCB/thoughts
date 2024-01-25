import Menu from "@/components/menu/Menu";
import styles from "./singleBlog.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SingleBlog = () => {
    return (
        <main>
            <div className={styles.blogInfo}>
                <div className={styles.textInfo}>
                    <h3 className={styles.blogTitle}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                    </h3>
                    <div className={styles.blogUser}>
                        <div className={styles.userImgWrapper}>
                            <Image src='/images/p1.jpeg' alt="blog img" fill className={styles.userImg} />
                        </div>
                        <div className={styles.userInfo}>
                            <p className={styles.userName}>
                                Lorem ipsum dolor sit amet.
                            </p>
                            <p className={styles.publishDate}>25 April 2023</p>
                        </div>
                    </div>
                </div>
                <div className={styles.blogImgWrapper}>
                    <Image
                        src="/images/p1.jpeg"
                        alt="blog img"
                        fill
                        className={styles.blogImg}
                    />
                </div>
            </div>
            <div className={styles.blogContent}>
                <div className={styles.blogDesc}>
                    <p className={styles.blogText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt consequuntur, ea cumque blanditiis facere enim
                        velit nobis ratione quo adipisci dolore quae ducimus et.
                        Rerum tenetur non fuga inventore omnis autem sapiente
                        est, molestias hic odio quos nam, vero harum quod atque
                        voluptatibus. Aliquid placeat suscipit doloremque
                        deleniti repudiandae. Placeat, neque. Labore inventore
                        deleniti similique quae exercitationem repellat, dicta
                        quos omnis quod ea est, nostrum, mollitia earum nihil
                        velit reiciendis tempora! Optio provident accusamus odit
                        quidem obcaecati dignissimos, deleniti illum nemo
                        doloribus sed, blanditiis officiis ab sequi. Pariatur
                        rerum deleniti amet porro rem recusandae? Ducimus
                        aliquam quas quis sequi distinctio.
                    </p>
                    <Comments />
                </div>
                <Menu />
            </div>
        </main>
    );
};

export default SingleBlog;
