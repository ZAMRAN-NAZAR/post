import React from "react";
import Layout from "../../Layout/Layout";
import Label from "../Components/Form/Label";
import { useForm } from "@inertiajs/react";

const Profile = ({ user }) => {
    const { data, setData, post, errors, processing } = useForm({
        name: user.name,
        email: user.email,
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post("/profile");
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
                            <Label htmlFor={"email"} name={"Email"} />
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="outline-none"
                                value={data.email}
                                disabled
                            />
                            <Label
                                htmlFor={"current_password"}
                                name={"Current password"}
                            />
                            <input
                                type="password"
                                placeholder="Enter your current password"
                                className="outline-none"
                                onChange={(e) =>
                                    setData("currentPassword", e.target.value)
                                }
                            />
                            <Label
                                htmlFor={"new_password"}
                                name={"New password"}
                            />
                            <input
                                type="password"
                                placeholder="Enter your new password"
                                className="outline-none"
                                onChange={(e) =>
                                    setData("newPassword", e.target.value)
                                }
                            />
                            <Label
                                htmlFor={"cofirmNewPassword"}
                                name={"Confirm new password"}
                            />
                            <input
                                type="password"
                                placeholder="Confirm your new password"
                                className="outline-none"
                                onChange={(e) =>
                                    setData(
                                        "confirmNewPassword",
                                        e.target.value
                                    )
                                }
                            />
                            {errors.password && (
                                <div className="pt-2 text-red-500">
                                    {errors.password}
                                </div>
                            )}
                            <div className="text-right">
                                <button
                                    disabled={processing}
                                    className="bg-slate-800 text-white font-bold w-40 py-2 rounded-2xl mt-8 mx-auto hover:bg-slate-600 transition-colors duration-150 shadow-xl"
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
