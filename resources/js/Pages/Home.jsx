import React from "react";
import Layout from "../Layout/Layout";

const Home = ({ user }) => {
    return (
        <Layout user={user}>
            <h1 className="title">Home</h1>
        </Layout>
    );
};

export default Home;
