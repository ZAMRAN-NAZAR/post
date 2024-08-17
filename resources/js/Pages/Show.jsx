import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "@inertiajs/react";

const Show = ({ post, postAuthor, user }) => {
    console.log(post);
    return (
        <Layout user={user}>
            <div className="p-4 border-b mt-5">
                <h3 className="font-bold text-md">{postAuthor.name}</h3>
                <span className="text-sm text-slate-400">
                    Posted at : {new Date(post.created_at).toLocaleTimeString()}{" "}
                    on {new Date(post.created_at).toDateString()}
                </span>
                <p>{post.body}</p>
                <div className="flex justify-end gap-2 mt-1">
                    <Link
                        href={`/posts/${post.id}/edit`}
                        className="bg-blue-500 px-4 py-1 rounded-lg text-sm text-white hover:bg-blue-600 transition-colors duration-150"
                    >
                        Edit
                    </Link>
                    <form>
                        <button className="bg-red-500 px-4 py-1 rounded-lg text-sm text-white hover:bg-red-600 transition-colors duration-150">
                            Delete
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Show;
