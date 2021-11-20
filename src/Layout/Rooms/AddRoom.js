import React, { useEffect } from "react";
import BuildingsList from "../Buildings/BuildingsList";

const AddRoom = ({ buildings, getBuildings }) => {
  useEffect(() => {
    console.log("buildings:", buildings);
    getBuildings();
  }, []);
  return (
    <div>
      <div className="row">
        <h2 className="text-primary mb-4">Add Room</h2>
      </div>
      <div className="row">
        <div className="col-3">
          <h5>Buildings</h5>
          <BuildingsList buildings={buildings} getBuildings={getBuildings} />
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
