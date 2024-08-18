import { Link, useForm } from "@inertiajs/react";
import React from "react";
import logo from "../../images/logo.svg";

const Layout = ({ children, user }) => {
    const { delete: destroy } = useForm();

    const submit = (e) => {
        e.preventDefault();

        destroy("/logout");
    };
    return (
        <>
            <header>
                <nav>
                    <a href="/">
                        <img src={logo} />
                    </a>
                    {user ? (
                        <div className="flex items-center gap-5">
                            <Link href="/profile" className="nav-link">
                                {user?.name}
                            </Link>

                            <Link href="/posts/create" className="nav-link">
                                Create
                            </Link>
                            <form onSubmit={submit}>
                                <button className="nav-link">Logout</button>
                            </form>
                        </div>
                    ) : (
                        <div>
                            <Link href="/login" className="nav-link">
                                Login
                            </Link>
                            <Link href="/register" className="nav-link">
                                Signup
                            </Link>
                        </div>
                    )}
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
};

export default Layout;
