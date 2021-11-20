import React, { useState, useEffect } from "react";
import RoomsCheckList from "./RoomsCheckList";

const RoomsList = ({ buildings, getBuildings }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    console.log("buildings:", buildings);
    getBuildings();
  }, []);

  const handleSelectBuilding = (buildingId) => {
    // setRooms(buildings[buildingId]);
    console.log("buildingId", buildings[buildingId].name);
    setRooms([buildings[buildingId].name, ...buildings[buildingId].rooms]);
  };

  const listBuildings = buildings.map((building) => (
    <a
      key={`roomId-${building.id}`}
      href="#"
      className="list-group-item list-group-item-action"
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
        <h5>Buildings</h5>
        <div className="col-3">
          <div className="list-group">{listBuildings}</div>
        </div>
        <div className="col-5">
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
