import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";
import PostCard from "../postCard/PostCard";

const getPosts = async (page, cat) => {
    const res = await fetch(`https://thoughts-sable.vercel.app/api/posts?page=${page}&cat=${cat}`, {cache: 'no-cache'});
    // console.log(`https://thoughts-sable.vercel.app/api/posts?page=${page}&cat=${cat || ''}`);

    if (!res.ok) {
        throw new Error("Failed to fetch");
    }

    return res.json();
};

const CardList = async ({ page, cat }) => {
    const {posts, count} = await getPosts(page, cat);

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Recent Posts</h2>
            <div className={styles.posts}>
                {posts.length
                    ? posts.map((post) => (
                          <PostCard key={post.id} post={post} />
                      ))
                    : <h1 style={{margin: '60px 0', textAlign: 'center'}}>There is no Blog found</h1>}
            </div>
            <Pagination page={page} count={count} />
        </section>
    );
};

export default CardList;
