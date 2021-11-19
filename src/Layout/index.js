import React, { useState, useEffect } from "react";
import { Routes, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import RoomList from "./Rooms/RoomsList";

const Layout = () => {
  const [rooms, setRooms] = useState([]);

  const controller = new AbortController();
  const { signal } = controller;

  const getRooms = async (signal) => {
    try {
      const response = await fetch("http://localhost:8000/rooms", signal);
      // console.log(await response.json());
      setRooms(await response.json());
    } catch (error) {
      console.log(error);
    }

    return () => {
      controller.abort();
    };
  };

  useEffect(() => {
    getRooms(signal);
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<RoomList rooms={rooms} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
