import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>
                <strong>Publish your passions your way</strong> share your
                knowledge or experiences, create a unique and
                beautiful blog
            </h1>
            <div className={styles.post}>
                <div className={styles.postImgWrapper}>
                    <Image src='/images/p1.jpeg' alt="lorem ipsum" fill className={styles.postImg} />
                </div>
                <div className={styles.postContent}>
                    <h3 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet.
                    </h3>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis eum laudantium mollitia tempore ullam autem, ipsum
                        harum delectus sapiente nisi, quod earum aperiam
                        corporis suscipit est rerum. Incidunt autem excepturi
                        eveniet minima, facilis dolorem reprehenderit culpa
                        molestias in, quam beatae veniam aliquid et? Nisi
                        blanditiis nihil voluptatum cumque unde dolore.
                    </p>
                    <button className={styles.button}>Read more</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;
