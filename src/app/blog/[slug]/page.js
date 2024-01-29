import Menu from "@/components/menu/Menu";
import styles from "./singleBlog.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
    const res = await fetch(`https://thoughts-sable.vercel.app/api/posts/${slug}`, {cache: "no-cache"});

    if (!res.ok) {
        console.log(res);
        throw new Error("Failed to fetch");
    }

    return res.json();
};

const SingleBlog = async ({params}) => {
    const {slug} = params;
    const post = await getData(slug);
    console.log(post);

    return (
        <main>
            <div className={styles.blogInfo}>
                <div className={styles.textInfo}>
                    <h3 className={styles.blogTitle}>{post?.title}</h3>
                    {/* BLOGGER INFO */}
                    <div className={styles.blogUser}>
                        {/* BLOGGER AVATER IMG */}
                        <div className={styles.userImgWrapper}>
                            <Image
                                src={post?.user?.image ? post.user.image :"/images/p1.jpeg"}
                                alt="blog img"
                                fill
                                className={styles.userImg}
                            />
                        </div>
                        {/* BLOGGER NAME and PUBLISHED DATE */}
                        <div className={styles.userInfo}>
                            <p className={styles.userName}>{post?.user?.name}</p>
                            <p className={styles.publishDate}>{new Date(post?.createdAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
                {/* BLOG IMG */}
                <div className={styles.blogImgWrapper}>
                    <Image
                        src={post?.img || "/images/p1.jpeg"}
                        alt={post?.title}
                        fill
                        className={styles.blogImg}
                    />
                </div>
            </div>
            {/* BLOG CONTENT */}
            <div className={styles.blogContent}>
                <div className={styles.blogDesc}>
                    <div className={styles.blogText} dangerouslySetInnerHTML={{__html: post?.desc}} />
                    <Comments postSlug={post?.slug} />
                </div>
                <Menu />
            </div>
        </main>
    );
};

export default SingleBlog;
