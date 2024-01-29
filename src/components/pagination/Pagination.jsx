"use client";
import { useRouter } from "next/navigation";
import styles from "./pagination.module.css";

const Pagination = ({ page, count }) => {
    const router = useRouter();
    const postPerPage = 4;
    const hasNext = postPerPage * (page - 1) + postPerPage < count;

    return (
        <div className={styles.container}>
            <button
                onClick={() =>
                    router.push(`?page=${page == 1 ? page : page - 1}`)
                }
                disabled={page == 1}
                className={styles.button}
            >
                Previous
            </button>
            <button
                onClick={() => router.push(`?page=${page + 1}`, {scroll: true})}
                className={styles.button}
                disabled={!hasNext}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
