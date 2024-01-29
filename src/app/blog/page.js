import CardList from '@/components/cardList/CardList';
import styles from './blog.module.css';
import Menu from '@/components/menu/Menu';

const Blog = ({searchParams}) => {
    const page = parseInt(searchParams?.page) || 1;
    const category = searchParams?.cat;

    return (
        <main>
            {category && <h2 className={styles.title}>{category}</h2>}
            <section className={styles.content}>
                <CardList page={page} cat={category} />
                <Menu />
            </section>
        </main>
    );
};

export default Blog;