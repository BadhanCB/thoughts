import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";
import MenuPost from "../menuPost/MenuPost";
import MenuCategory from "../menuCategory/MenuCategory";

const Menu = () => {
    return (
        <aside className={styles.container}>
            <h5 className={styles.subtitle}>{"What's Hot"}</h5>
            <h4 className={styles.title}>Most Popular</h4>
            <div className={styles.items}>
                <MenuPost withImg={false} />
                <MenuPost withImg={false} />
                <MenuPost withImg={false} />
                <MenuPost withImg={false} />
            </div>
            <h5 className={styles.subtitle}>Discover by Topics</h5>
            <h4 className={styles.title}>Categories</h4>
            <div className={styles.categoryList}>
                <MenuCategory />
                <MenuCategory />
                <MenuCategory />
                <MenuCategory />
                <MenuCategory />
                <MenuCategory />
            </div>
            <h5 className={styles.subtitle}>chosen by the editor</h5>
            <h4 className={styles.title}>Editors Pick</h4>
            <div className={styles.items}>
                <MenuPost withImg={true} />
                <MenuPost withImg={true} />
                <MenuPost withImg={true} />
                <MenuPost withImg={true} />
            </div>
        </aside>
    );
};

export default Menu;
