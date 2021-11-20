import React, { useState, useEffect } from "react";
import { Routes, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import SuppliesList from "./Supplies/SuppliesList";
import RoomList from "./Rooms/RoomsList";
import AddBuilding from "./Buildings/AddBuilding";
import AddRoom from "./Rooms/AddRoom";
import EditRoom from "./Rooms/EditRoom";
import ResponseOptions from "./ResponseOptions/ResponseOptionsList";

const Layout = () => {
  const [buildings, setBuildings] = useState([]);
  const [buildingSelected, setBuildingSelected] = useState("");
  const [responseOptions, setResponseOptions] = useState(null);

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

  const handleSelectBuilding = (buildingId) => {
    setBuildingSelected(buildingId);
    // console.log(buildings[buildingId].options);
    setResponseOptions(buildings[buildingId].options);

    console.log("buildingId", buildings[buildingId].name);
    // setRooms([buildings[buildingId].name, ...buildings[buildingId].rooms]);
  };

  useEffect(() => {
    getBuildings(signal);
  }, []);

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/rooms/checklist"
            element={
              <RoomList buildings={buildings} getBuildings={getBuildings} />
            }
          />
          <Route path="/supplies/list" element={<SuppliesList />} />

          <Route
            path="/building/response-options"
            element={
              <ResponseOptions
                buildings={buildings}
                getBuildings={getBuildings}
                handleSelectBuilding={handleSelectBuilding}
              />
            }
          />

          <Route path="/rooms/:roomId" element={<Home />} />
          <Route path="/rooms/:roomId/edit" element={<EditRoom />} />
          <Route
            path="/rooms/new"
            element={
              <AddRoom
                buildings={buildings}
                getBuildings={getBuildings}
                buildingSelected={buildingSelected}
                handleSelectBuilding={handleSelectBuilding}
              />
            }
          />
          <Route path="/buildings/new" element={<AddBuilding />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
