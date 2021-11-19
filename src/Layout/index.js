import React, { useState } from "react";
import { Routes, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import RoomList from "./Rooms/RoomsList";

const Layout = () => {
  const [rooms, setRooms] = useState([]);

  const getRooms = async (signal) => {
    try {
      const response = await fetch();
    } catch (error) {}
  };
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<RoomList />} />
          {/* <Route path="/rooms" element={<Home />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
