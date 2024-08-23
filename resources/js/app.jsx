import "./bootstrap";
import "../css/app.css";
import axios from "axios";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";

const csrfToken = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");

axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

axios.interceptors.response.use(
    (response) => {
        if (response.config.url.includes("/login")) {
            const newCsrfToken = response.headers["x-csrf-token"];
            axios.defaults.headers.common["X-CSRF-TOKEN"] = newCsrfToken;
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
