import React from "react";
import Layout from "../Layout/Layout";
import { useForm } from "@inertiajs/react";

const Create = ({ user }) => {
    const { data, setData, post, processing } = useForm({
        body: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post("/posts");
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
                        Create Post
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default Create;
