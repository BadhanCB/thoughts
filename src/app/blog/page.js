import CardList from '@/components/cardList/CardList';
import styles from './blog.module.css';
import Menu from '@/components/menu/Menu';

const Blog = () => {
    return (
        <main>
            <h2 className={styles.title}>Styles</h2>
            <section className={styles.content}>
                <CardList />
                <Menu />
            </section>
        </main>
    );
};

export default Blog;