import { Link } from "@inertiajs/react";
import React from "react";
import logo from "../../images/logo.svg";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <nav>
                    <Link href="/" className="nav-link">
                        <img src={logo} />
                    </Link>
                    <div>
                        <Link href="/login" className="nav-link">
                            Login
                        </Link>
                        <Link href="/register" className="nav-link">
                            Signup
                        </Link>
                    </div>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
};

export default Layout;
