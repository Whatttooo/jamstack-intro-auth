import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import IdentityModal from "react-netlify-identity-widget";
import Layout from "../components/layout";
import Profile from "../components/profile";
import PrivateRoute from "../components/privateRoute";
import RouteBase from "../components/routeBase";
import RouteSecret from "../components/routeSecret";
import RouteLogin from "../components/routeLogin";
import { navigate } from "gatsby";

import "react-netlify-identity-widget/styles.css";

const Dashboard = ({ location }) => {
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true });
    }
  }, []);

  const toggleModal = () => setVisible(!isVisible);

  return (
    <Layout>
      <Profile showModal={toggleModal} />
      <Router>
        <PrivateRoute path="/dashboard/base" component={RouteBase} />
        <PrivateRoute path="/dashboard/secret" component={RouteSecret} />
        <RouteLogin path="/dashboard/login" showModal={toggleModal} />
      </Router>
      <IdentityModal showDialog={isVisible} onCloseDialog={toggleModal} />
    </Layout>
  );
};

export default Dashboard;
