import React, { useState, useEffect } from "react";

const BuildingsList = ({ buildings, getBuildings }) => {
  //   const [rooms, setRooms] = useState([]);
  const [buildingSelected, setBuildingSelected] = useState("");
  const [responseOptions, setResponseOptions] = useState(null);

  useEffect(() => {
    console.log("buildings:", buildings);
    getBuildings();
  }, []);

  const handleSelectBuilding = (buildingId) => {
    setBuildingSelected(buildingId);
    setResponseOptions(buildings[buildingId].options);
    console.log("buildingId", buildings[buildingId]);
    // setRooms([buildings[buildingId].name, ...buildings[buildingId].rooms]);
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
      <div className="list-group">{listBuildings}</div>
    </div>
  );
};

export default BuildingsList;
