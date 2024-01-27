"use client";
import { useMemo, useState } from "react";
import styles from "./write.module.css";
import "react-quill/dist/quill.snow.css";
import "./write.css";

const Write = () => {
    const [content, setContent] = useState("");
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);

    return (
        <main>
            <input
                type="text"
                name="title"
                id="title"
                className={styles.title}
                placeholder="Title..."
            />
            <div>input</div>
            <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                placeholder="Content..."
            />
            <button onClick={() => console.log(content)} className={styles.button}>Publish</button>
        </main>
    );
};

export default Write;
