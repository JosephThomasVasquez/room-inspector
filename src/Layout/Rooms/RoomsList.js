import React, { useState, useEffect } from "react";
import BuildingsList from "../Buildings/BuildingsList";
import RoomsCheckList from "./RoomsCheckList";

const RoomsList = ({ buildings, getBuildings }) => {
  const [rooms, setRooms] = useState([]);
  const [buildingSelected, setBuildingSelected] = useState("");
  const [responseOptions, setResponseOptions] = useState(null);

  useEffect(() => {
    console.log("buildings:", buildings);
    getBuildings();
  }, []);

  const handleSelectBuilding = (buildingId) => {
    setBuildingSelected(buildingId);
    // console.log(buildings[buildingId].options);
    setResponseOptions(buildings[buildingId].options);

    console.log("buildingId", buildings[buildingId].name);
    setRooms([buildings[buildingId].name, ...buildings[buildingId].rooms]);
  };

  const listBuildings = buildings.map((building) => (
    <div
      key={`buildingId-${building.id}`}
      href="#"
      className={`list-group-item list-group-item-action ${
        buildingSelected === building.id ? "active" : ""
      }`}
      aria-current="true"
      onClick={() => handleSelectBuilding(building.id)}
    >
      {building.name}
    </div>
  ));

  return (
    <div>
      <div className="row">
        <h2 className="text-primary mb-4">Rooms List</h2>
      </div>
      <div className="row">
        <div className="col-3">
          <h5>Buildings</h5>
          <div className="list-group">{listBuildings}</div>
        </div>
        <div className="col-9">
          <h5 className="text-primary">{rooms[0]}</h5>
          {rooms.length > 0 ? (
            <div className="list-group">
              <RoomsCheckList
                building={rooms.buildingId}
                rooms={rooms}
                responseOptions={responseOptions}
              />
            </div>
          ) : (
            <h5>Select a building to display a list rooms to inspect.</h5>
          )}
        </div>
      </div>
      <ul>
        {/* Rooms
        <li>{JSON.stringify(buildings)}</li> */}
      </ul>
    </div>
  );
};

export default RoomsList;
