"use client";
import { useMemo, useState } from "react";
import styles from "./write.module.css";
import "react-quill/dist/quill.snow.css";
import "./write.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import useSWR from "swr";
import { FiImage } from "react-icons/fi";
import { slugify } from "@/utils/slugify";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import Image from "next/image";
import { app } from "@/utils/firebase";

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message);
    }

    return data;
};

const Write = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [imgFile, setImgFile] = useState(null);
    const router = useRouter();
    const { status } = useSession();

    const ReactQuill = useMemo(
        () => dynamic(() => import("react-quill"), { ssr: false }),
        []
    );
    const quillModules = {
        toolbar: {
            container: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ["bold", "italic", "underline", "strike"],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ script: "sub" }, { script: "super" }],
                ["link"],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ align: [] }],
                ["blockquote", "code-block"],
            ],
            // handlers: {
            //    'image': this.imageHandler
            // }
        },
    };
    const { isLoading, data, error } = useSWR(
        "https://thoughts-sable.vercel.app/api/categories",
        fetcher
    );

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
    } else if (status === "unauthenticated") {
        router.push("/");
    }

    const handlePublish = async () => {
        try {
            if (!title || !content || !category || !imgFile) {
                alert("Please Fill up all the field");
            } else {
                const storage = getStorage(app);
                const storageRef = ref(storage, `${imgFile.name}${Math.random()}`);
    
                const uploadTask = uploadBytesResumable(storageRef, imgFile);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress =
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log("Upload is " + progress + "% done");
                        switch (snapshot.state) {
                            case "paused":
                                console.log("Upload is paused");
                                break;
                            case "running":
                                console.log("Upload is running");
                                break;
                        }
                    },
                    (error) => {
                        // Handle unsuccessful uploads
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then(
                            async (downloadURL) => {
                                const newPost = {
                                    slug: slugify(title),
                                    title: title,
                                    desc: content,
                                    catSlug: category,
                                    img: downloadURL,
                                };
                    
                                await fetch("https://thoughts-sable.vercel.app/api/posts", {
                                    method: "POST",
                                    body: JSON.stringify(newPost),
                                });
                                
                                router.push(`/blog/${newPost.slug}`);
                            }
                        );
                    }
                );
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <main>
            {/* BLOG TITLE */}
            <input
                type="text"
                name="title"
                id="title"
                className={styles.title}
                placeholder="Title..."
                onChange={(e) => setTitle(e.target.value)}
            />
            {/* BLOG INFO AREA */}
            <div className={styles.blogInfo}>
                {/* BLOG IMG */}
                <div className={styles.imgContainer}>
                    <label className={styles.imgLabel} htmlFor="img">
                        {imgFile ? <Image src={URL.createObjectURL(imgFile)} alt="post url" width={100} height={100} /> : <FiImage size={50} />}
                    </label>
                    <input
                        type="file"
                        name="img"
                        id="img"
                        accept="image/png, image/jpeg, image/jpg, image/webp"
                        style={{ display: "none" }}
                        onChange={(e) => setImgFile(e.target.files[0])}
                    />
                </div>
                {/* BLOG CAtegory */}
                <div>
                    {isLoading ? (
                        <p>Getting all Categories...</p>
                    ) : (
                        !error && (
                            <select
                                name="category"
                                id="category"
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value={undefined}>
                                    Select a Category
                                </option>
                                {data.map((cat) => (
                                    <option key={cat.id} value={cat.slug}>
                                        {cat.title}
                                    </option>
                                ))}
                            </select>
                        )
                    )}
                </div>
            </div>
            {/* BLOG CONTENT RICH TEXT EDITOR */}
            <ReactQuill
                theme="snow"
                modules={quillModules}
                value={content}
                onChange={setContent}
                placeholder="Content..."
            />
            <button onClick={handlePublish} className={styles.button}>
                Publish
            </button>
        </main>
    );
};

export default Write;
