import React from "react";
import { Routes, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
