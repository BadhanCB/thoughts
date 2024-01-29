import Featured from "@/components/featured/Featured";
import styles from "./page.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export default function Home({searchParams}) {
  const page = parseInt(searchParams?.page) || 1;

  return (
    <main className={styles.main}>
      {/* <Featured /> */}
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </main>
  );
}
