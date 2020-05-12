import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>Welcome to the dashboard</h1>
    <p>Log in to see more awesome stuff</p>
    <Link to="/dashboard">Right here &rarr;</Link>
  </Layout>
);
