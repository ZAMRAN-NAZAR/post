import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "@inertiajs/react";

const Home = ({ user, posts }) => {
    return (
        <Layout user={user}>
            <div>
                {posts.data.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <h3 className="font-bold text-md">{post.user.name}</h3>
                        <span className="text-sm text-slate-400">
                            Posted at :{" "}
                            {new Date(post.created_at).toLocaleTimeString()} on{" "}
                            {new Date(post.created_at).toDateString()}
                        </span>
                        <p>{post.body}</p>
                        <Link
                            href={`/posts/${post.id}`}
                            className="text-blue-500 font-semibold hover:underline"
                        >
                            Read more
                        </Link>
                    </div>
                ))}
            </div>
            <div className="py-12 mx-4">
                {posts.links.map((link) =>
                    link.url ? (
                        <Link
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-1 mx-1 ${
                                link.active ? "font-bold underline" : ""
                            }`}
                        />
                    ) : (
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="p-1 mx-1 text-slate-400 line-through"
                        ></span>
                    )
                )}
            </div>
        </Layout>
    );
};

export default Home;
