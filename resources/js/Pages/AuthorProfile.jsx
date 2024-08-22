import React from "react";
import Layout from "../Layout/Layout";
import { Link, useForm } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";
import settings from "../../images/settings.svg";

const AuthorProfile = ({ user, posts, authUser }) => {
    const { delete: destroy, processing } = useForm();
    const route = useRoute();

    return (
        <Layout user={authUser}>
            <div className="py-6 flex justify-between">
                <h2 className="font-bold text-2xl">{user.name}</h2>
                {authUser.name === user.name ? (
                    <Link
                        href="/profile"
                        className="flex bg-slate-800 text-white py-1 px-4 rounded-xl hover:bg-slate-600 transition-colors duration-150"
                    >
                        <img className="w-5 text-white mr-2" src={settings} />
                        Profile Settings
                    </Link>
                ) : (
                    ""
                )}
            </div>
            <p className="font-medium text-lg py-2">Posts</p>
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="p-4 border-b flex justify-between"
                >
                    {post.body}
                    {user.name === authUser.name ? (
                        <div className="flex justify-end gap-2 mt-1">
                            <Link
                                href={`/posts/${post.id}/edit`}
                                className="bg-blue-500 px-4 py-1 rounded-lg text-sm text-white hover:bg-blue-600 transition-colors duration-150"
                            >
                                Edit
                            </Link>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();

                                    destroy(route("posts.destroy", post));
                                }}
                            >
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
            ))}
        </Layout>
    );
};

export default AuthorProfile;
