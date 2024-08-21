import React from "react";
import Layout from "../Layout/Layout";

const AuthorProfile = ({ user, posts, authUser }) => {
    console.log(posts);

    return (
        <Layout user={authUser}>
            <h2 className="font-bold text-2xl py-6">{user.name}</h2>
            <p className="font-medium text-lg py-2">Posts</p>
            {posts.map((post) => (
                <div key={post.id} className="p-4 border-b">
                    {post.body}
                </div>
            ))}
        </Layout>
    );
};

export default AuthorProfile;
