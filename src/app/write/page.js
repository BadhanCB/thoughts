"use client";
import { useMemo, useState } from "react";
import styles from "./write.module.css";
import "react-quill/dist/quill.snow.css";
import "./write.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Write = () => {
    const [content, setContent] = useState("");
    const ReactQuill = useMemo(
        () => dynamic(() => import("react-quill"), { ssr: false }),
        []
    );
    const { status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        return (
            <main
                style={{
                    width: "100%",
                    height: "75vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <h1 style={{ textAlign: "center" }}>Loading...</h1>
            </main>
        );
    } else if (status === "authenticated") {
        router.push("/");
    }

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
            <button
                onClick={() => console.log(content)}
                className={styles.button}
            >
                Publish
            </button>
        </main>
    );
};

export default Write;
