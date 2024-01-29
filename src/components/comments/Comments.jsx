"use client";
import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useState } from "react";

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message);
    }

    return data;
};

const Comments = ({ postSlug }) => {
    const { status } = useSession();
    const { isLoading, data, error, mutate } = useSWR(
        `https://thoughts-sable.vercel.app/api/comments?postSlug=${postSlug}`,
        fetcher
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = { desc: e.target.comment.value, postSlug };

        try {
            await fetch("https://thoughts-sable.vercel.app/api/comments", {
                method: "POST",
                body: JSON.stringify(newComment),
            });
            await mutate();
            e.target.reset();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section>
            <h3 className={styles.title}>Comments</h3>
            {status === "authenticated" ? (
                <form onSubmit={handleSubmit} className={styles.commentForm}>
                    <textarea
                        name="comment"
                        id="comment"
                        placeholder="write your comment..."
                        className={styles.commentInput}
                    ></textarea>
                    <input
                        type="submit"
                        value="Comment"
                        className={styles.commentSubmitBtn}
                    />
                </form>
            ) : (
                <Link href="/login">Please login to comment...</Link>
            )}
            <div className={styles.comments}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    !error &&
                    data?.map((comment) => (
                        <div key={comment.id} className={styles.singleComments}>
                            <div className={styles.commenter}>
                                <Image
                                    src={comment.user.image}
                                    alt={comment.user.name}
                                    width={50}
                                    height={50}
                                    className={styles.commenterAvatar}
                                />
                                <div className={styles.commenterInfo}>
                                    <h6 className={styles.commenterName}>
                                        {comment.user.name}
                                    </h6>
                                    <p className={styles.commentDate}>
                                        {comment.createdAt}
                                    </p>
                                </div>
                            </div>
                            <p className={styles.comment}>{comment.desc}</p>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default Comments;
