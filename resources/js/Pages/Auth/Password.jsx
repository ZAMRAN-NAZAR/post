import React from "react";
import Layout from "../../Layout/Layout";
import Label from "../Components/Form/Label";
import { useForm } from "@inertiajs/react";

const Password = ({ user }) => {
    const { data, setData, processing, errors, patch } = useForm({
        current_password: "",
        new_password: "",
        new_password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        patch("/profile/password");
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
                            <Label
                                htmlFor={"current_password"}
                                name={"Current password"}
                            />
                            <input
                                type="password"
                                placeholder="Enter your current password"
                                className="outline-none"
                                onChange={(e) =>
                                    setData("current_password", e.target.value)
                                }
                            />
                            {errors.current_password && (
                                <div className="pt-2 text-red-500">
                                    {errors.current_password}
                                </div>
                            )}
                            <Label
                                htmlFor={"new_password"}
                                name={"New password"}
                            />
                            <input
                                type="password"
                                placeholder="Enter your new password"
                                className="outline-none"
                                onChange={(e) =>
                                    setData("new_password", e.target.value)
                                }
                            />
                            <Label
                                htmlFor={"new_password_confirmation"}
                                name={"Confirm new password"}
                            />
                            <input
                                type="password"
                                placeholder="Confirm your new password"
                                className="outline-none"
                                onChange={(e) =>
                                    setData(
                                        "new_password_confirmation",
                                        e.target.value
                                    )
                                }
                            />
                            {errors.new_password && (
                                <div className="pt-2 text-red-500">
                                    {errors.new_password}
                                </div>
                            )}
                            <div className="text-right">
                                <button
                                    disabled={processing}
                                    className="bg-slate-800 text-white font-bold px-3 py-2 rounded-2xl mt-8 hover:bg-slate-600 transition-colors duration-150 shadow-xl"
                                >
                                    Change password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Password;
