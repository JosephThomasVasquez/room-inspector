import React, { useEffect } from "react";

const ResponseOptionsList = ({ buildings, getBuildings }) => {
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
        <h2 className="mb-4">Response Options</h2>
      </div>
    </div>
  );
};

export default ResponseOptionsList;
