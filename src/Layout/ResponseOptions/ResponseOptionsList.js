import React, { useState, useEffect } from "react";
import BuildingsList from "../Buildings/BuildingsList";

const ResponseOptionsList = ({
  buildings,
  getBuildings,
  buildingSelected,
  handleSelectBuilding,
}) => {
  const [optionsList, setOptionsList] = useState();

  useEffect(() => {
    console.log("buildings:", buildings);
    getBuildings();
  }, []);

  //   const handleSelectBuilding = (buildingId) => {
  //     setBuildingSelected(buildingId);
  //     // console.log(buildings[buildingId].options);
  //     setResponseOptions(buildings[buildingId].options);

  //     console.log("buildingId", buildings[buildingId].name);
  //     setRooms([buildings[buildingId].name, ...buildings[buildingId].rooms]);
  //   };

  return (
    <div>
      <div className="row">
        <h2 className="text-primary mb-4">Response Options</h2>
      </div>
      <div className="row">
        <div className="col-3">
          <h5>Buildings</h5>
          <BuildingsList
            buildings={buildings}
            getBuildings={getBuildings}
            buildingSelected={buildingSelected}
            handleSelectBuilding={handleSelectBuilding}
          />
          {/* <div className="list-group">{listBuildings}</div> */}
        </div>
      </div>
    </div>
  );
};

export default ResponseOptionsList;
