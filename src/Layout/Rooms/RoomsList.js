import React, { useState, useEffect } from "react";
import RoomsCheckList from "./RoomsCheckList";

const RoomsList = ({ buildings, getBuildings }) => {
  const [rooms, setRooms] = useState([]);
  const [buildingSelected, setBuildingSelected] = useState("");

  useEffect(() => {
    console.log("buildings:", buildings);
    getBuildings();
  }, []);

  const handleSelectBuilding = (buildingId) => {
    setBuildingSelected(buildingId);
    console.log("buildingId", buildings[buildingId].name);
    setRooms([buildings[buildingId].name, ...buildings[buildingId].rooms]);
  };

  const listBuildings = buildings.map((building) => (
    <a
      key={`buildingId-${building.id}`}
      href="#"
      className={`list-group-item list-group-item-action ${
        buildingSelected === building.id ? "active" : ""
      }`}
      aria-current="true"
      onClick={() => handleSelectBuilding(building.id)}
    >
      {building.name}
    </a>
  ));

  return (
    <div>
      <div className="row">
        <h2 className="mb-4">Rooms List</h2>
      </div>
      <div className="row">
        <div className="col-3">
          <h5>Buildings</h5>
          <div className="list-group">{listBuildings}</div>
        </div>
        <div className="col-5">
          <h5>{rooms[0]}</h5>
          <div className="list-group">
            {rooms && (
              <RoomsCheckList building={rooms.buildingId} rooms={rooms} />
            )}
          </div>
        </div>
      </div>
      <ul>
        Rooms
        <li>{JSON.stringify(buildings)}</li>
      </ul>
    </div>
  );
};

export default RoomsList;
