import { useForm } from "@inertiajs/react";
import React from "react";
import Label from "../Components/Form/Label";

const Register = () => {
    const { data, setData, processing, post, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post("/register");
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/2 rounded-xl shadow-2xl">
                <h1 className="font-bold text-4xl pt-10 flex justify-center">
                    Sign Up
                </h1>
                <form className="px-10 py-10" onSubmit={submit}>
                    <Label htmlFor={"username"} name={"Username"} />
                    <input
                        type="text"
                        placeholder="Enter your username"
                        className="outline-none"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.username && (
                        <div className="pt-2 text-red-500">
                            {errors.username}
                        </div>
                    )}
                    <Label htmlFor={"email"} name={"Email"} />
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="outline-none"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    {errors.email && (
                        <div className="pt-2 text-red-500">{errors.email}</div>
                    )}
                    <Label htmlFor={"password"} name={"Password"} />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="outline-none"
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <Label
                        htmlFor={"password_confirmation"}
                        name={"Confirm Password"}
                    />
                    <input
                        type="password"
                        placeholder="Confirm your password"
                        id="password_confirmation"
                        name="password_confirmation"
                        className="outline-none"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
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
                        Already have an account?{" "}
                        <span>
                            <a
                                href="/login"
                                className="text-blue-700 pl-1 font-semibold"
                            >
                                Log in
                            </a>
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
