import React from "react";

import { Outlet, useNavigation } from "react-router-dom";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";

const RootLayout = () => {
  const navigation = useNavigation();
  return (
    <div className="w-full">
      <Header></Header>
      {/*===============================
              OUTLET
      ====================================*/}
      <div className="min-h-[calc(100vh-310px)] w-full ">
        {navigation.state === "loading" ? <Spinner></Spinner> : ""}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
