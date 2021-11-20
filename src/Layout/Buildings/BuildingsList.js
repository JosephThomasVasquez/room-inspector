import React, { useState, useEffect } from "react";

const BuildingsList = ({
  buildings,
  getBuildings,
  buildingSelected,
  handleSelectBuilding,
}) => {
  useEffect(() => {
    console.log("buildings:", buildings);
    getBuildings();
  }, []);

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
