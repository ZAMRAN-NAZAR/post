import React from "react";
import Layout from "../../Layout/Layout";
import Label from "../Components/Form/Label";
import { Link, useForm } from "@inertiajs/react";

const Profile = ({ user }) => {
    const { data, setData, patch, errors, processing } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();

        patch("/profile");
    };

    return (
        <Layout user={user}>
            <div className="flex justify-center items-center h-screen">
                <div className="w-full rounded-xl shadow-2xl flex justify-center">
                    <div className="w-3/4">
                        <h1 className="font-bold text-4xl pt-10 px-10">
                            Profile settings
                        </h1>
                        <form className="px-10 py-10" onSubmit={submit}>
                            <Label htmlFor={"name"} name={"Name"} />
                            <input
                                type="text"
                                className="outline-none"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            {errors.name && (
                                <div className="pt-2 text-red-500">
                                    {errors.name}
                                </div>
                            )}
                            <Label htmlFor={"email"} name={"Email"} />
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="outline-none"
                                value={data.email}
                                disabled
                            />
                            <div className="text-right">
                                <Link
                                    href="/profile/password"
                                    className="bg-slate-800 text-white font-bold px-5 mx-2 py-2 rounded-2xl mt-8 hover:bg-slate-600 transition-colors duration-150 shadow-xl"
                                >
                                    Change Password
                                </Link>
                                <button
                                    disabled={processing}
                                    className="bg-slate-800 text-white font-bold px-5 py-2 rounded-2xl mt-8 hover:bg-slate-600 transition-colors duration-150 shadow-xl"
                                >
                                    Save changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Profile;
