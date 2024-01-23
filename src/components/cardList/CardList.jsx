import Image from "next/image";
import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";
import Link from "next/link";
import PostCard from "../postCard/PostCard";

const CardList = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Recent Posts</h2>
            <div className={styles.posts}>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
            <Pagination />
        </section>
    );
};

export default CardList;
