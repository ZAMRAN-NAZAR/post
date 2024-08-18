import { useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import Label from "../Components/Form/Label";

const LogIn = () => {
    const flash = usePage().props.flash;
    const [flashMessage, setFlashMessage] = useState(flash.loggedOut);

    setTimeout(() => {
        setFlashMessage(null);
    }, 2000);

    const { data, setData, errors, processing, post } = useForm({
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post("/login");
    };

    return (
        <>
            {flashMessage && (
                <div className="absolute top-24 right-6 bg-red-600 text-white text-sm p-3 rounded-md shadow-lg">
                    {flashMessage}
                </div>
            )}

            <div className="flex justify-center items-center h-screen">
                <div className="w-1/2 rounded-xl shadow-2xl">
                    <h1 className="font-bold text-4xl pt-10 flex justify-center">
                        Log In
                    </h1>
                    <form className="px-10 py-10" onSubmit={submit}>
                        <Label htmlFor={"email"} name={"Email"} />
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="outline-none"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {errors.email && (
                            <div className="pt-2 text-red-500">
                                {errors.email}
                            </div>
                        )}
                        <Label htmlFor={"password"} name={"Password"} />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="outline-none"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        {errors.password && (
                            <div className="pt-2 text-red-500">
                                {errors.password}
                            </div>
                        )}
                        <div className="text-center">
                            <button
                                disabled={processing}
                                className="bg-slate-800 text-white font-bold w-full py-2 rounded-2xl mt-8 mx-auto hover:bg-slate-600 transition-colors duration-150 shadow-xl"
                            >
                                Login
                            </button>
                        </div>
                        <div className="border-b mt-8"></div>
                        <p className="text-center text-sm mt-3">
                            Don't have an account?{" "}
                            <span>
                                <a
                                    href="/register"
                                    className="text-blue-700 pl-1 font-semibold"
                                >
                                    Sign up now
                                </a>
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LogIn;
