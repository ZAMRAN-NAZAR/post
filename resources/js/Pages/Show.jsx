import React from "react";
import Layout from "../Layout/Layout";
import { Link, useForm } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

const Show = ({ post, postAuthor, user }) => {
    const { delete: destroy, processing } = useForm();
    const route = useRoute();

    const submit = (e) => {
        e.preventDefault();

        destroy(route("posts.destroy", post));
    };

    return (
        <Layout user={user}>
            <div className="p-4 border-b mt-5">
                <h3 className="font-bold text-md">{postAuthor.name}</h3>
                <span className="text-sm text-slate-400">
                    Posted at : {new Date(post.created_at).toLocaleTimeString()}{" "}
                    on {new Date(post.created_at).toDateString()}
                </span>
                <p>{post.body}</p>

                {user.name === post.user.name ? (
                    <div className="flex justify-end gap-2 mt-1">
                        <Link
                            href={`/posts/${post.id}/edit`}
                            className="bg-blue-500 px-4 py-1 rounded-lg text-sm text-white hover:bg-blue-600 transition-colors duration-150"
                        >
                            Edit
                        </Link>
                        <form onSubmit={submit}>
                            <button
                                className="bg-red-500 px-4 py-1 rounded-lg text-sm text-white hover:bg-red-600 transition-colors duration-150"
                                disabled={processing}
                            >
                                Delete
                            </button>
                        </form>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </Layout>
    );
};

export default Show;
