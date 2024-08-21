import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { Link, usePage } from "@inertiajs/react";

const Home = ({ user, posts }) => {
    const flash = usePage().props.flash;

    const [flashMessage, setFlashMessage] = useState(flash);

    setTimeout(() => {
        setFlashMessage({});
    }, 2000);

    return (
        <Layout user={user}>
            {flashMessage.updated && (
                <div className="absolute top-24 right-6 bg-green-600 text-white text-sm p-3 rounded-md shadow-lg">
                    {flashMessage.updated}
                </div>
            )}
            {flashMessage.created && (
                <div className="absolute top-24 right-6 bg-green-600 text-white text-sm p-3 rounded-md shadow-lg">
                    {flashMessage.created}
                </div>
            )}
            {flashMessage.loggedIn && (
                <div className="absolute top-24 right-6 bg-green-600 text-white text-sm p-3 rounded-md shadow-lg">
                    {flashMessage.loggedIn}
                </div>
            )}
            {flashMessage.name && (
                <div className="absolute top-24 right-6 bg-green-600 text-white text-sm p-3 rounded-md shadow-lg">
                    {flashMessage.name}
                </div>
            )}
            {flashMessage.password && (
                <div className="absolute top-24 right-6 bg-green-600 text-white text-sm p-3 rounded-md shadow-lg">
                    {flashMessage.password}
                </div>
            )}
            {flashMessage.deleted && (
                <div className="absolute top-24 right-6 bg-red-600 text-white text-sm p-3 rounded-md shadow-lg">
                    {flashMessage.deleted}
                </div>
            )}

            <div>
                {posts.data.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <Link
                            href={`/authorprofile/${post.user.id}`}
                            className="font-bold text-md"
                        >
                            {post.user.name}
                        </Link>
                        <span className="text-sm text-slate-400 block">
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
