import React, { useState, useEffect } from "react";
import { Routes, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import RoomList from "./Rooms/RoomsList";

const Layout = () => {
  const [buildings, setBuildings] = useState([]);

  const controller = new AbortController();
  const { signal } = controller;

  // get the buildings data from the api
  const getBuildings = async (signal) => {
    try {
      const response = await fetch("http://localhost:8000/buildings", signal);
      const data = await response.json();
      setBuildings(data);
    } catch (error) {
      console.log(error);
    }

    return () => {
      controller.abort();
    };
  };

  useEffect(() => {
    getBuildings(signal);
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/rooms-checklist"
            element={
              <RoomList buildings={buildings} getBuildings={getBuildings} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
