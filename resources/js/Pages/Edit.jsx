import React from "react";
import Layout from "../Layout/Layout";
import { useForm } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

const Edit = ({ user, post }) => {
    const { data, setData, put, processing } = useForm({
        body: post.body,
    });

    const route = useRoute();

    const submit = (e) => {
        e.preventDefault();

        put(route("posts.update", post));
    };

    return (
        <Layout user={user}>
            <div className="mt-10">
                <textarea
                    rows={10}
                    value={data.body}
                    onChange={(e) => setData("body", e.target.value)}
                ></textarea>
                <form onSubmit={submit}>
                    <button
                        className="primary-btn mt-5 w-1/3 mx-auto"
                        disabled={processing}
                    >
                        Update Post
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default Edit;
