import React, { useState, useEffect } from "react";
import BuildingsList from "../Buildings/BuildingsList";

const AddRoom = ({
  buildings,
  getBuildings,
  buildingSelected,
  handleSelectBuilding,
}) => {
  const inititalFormData = {
    id: "",
    name: "Room name",
    roomType: "Room Type",
    buildingId: "",
    building: "Building",
    floor: "Floor",
    area: "Area",
    checked: false,
    occupied: false,
    image: "",
  };
  const [roomFormData, setRoomFormData] = useState(inititalFormData);

  useEffect(() => {
    console.log("buildings:", buildings);
    getBuildings();
  }, []);

  const handleChange = ({ target }) => {
    // if (target.name === "image") {
    //   const addImage = roomFormData.image.push(target.value);

    //   setRoomFormData({ ...roomFormData, addImage });
    // }

    setRoomFormData({ ...roomFormData, [target.name]: target.value });
    console.log(roomFormData);
  };

  //   handle submit deck form data
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="row">
        <h2 className="text-primary mb-4">Add Room</h2>
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
        </div>
        <div className="col-9">
          <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-start flex-column">
              <label htmlFor="building" className="h6 my-2">
                Building
              </label>
              <input
                name="building"
                id="building"
                placeholder="Building"
                className="my-2"
                onChange={handleChange}
                value={
                  buildings[buildingSelected] &&
                  buildings[buildingSelected].name
                }
                disabled
              ></input>
              <label htmlFor="name" className="h6 my-2">
                Room Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Room name"
                className="my-2"
                onChange={handleChange}
                value={roomFormData.name}
              ></input>

              <label htmlFor="floor" className="h6 my-2">
                Floor
              </label>
              <input
                name="floor"
                id="floor"
                placeholder="Floor"
                className="my-2"
                onChange={handleChange}
                value={roomFormData.floor}
              ></input>
              <label htmlFor="area" className="h6 my-2">
                Area
              </label>
              <input
                name="area"
                id="area"
                placeholder="area"
                className="my-2"
                onChange={handleChange}
                value={roomFormData.area}
              ></input>
              <label htmlFor="roomType" className="h6 my-2">
                Room Type
              </label>
              <input
                name="roomType"
                id="roomType"
                placeholder="roomType"
                className="my-2"
                onChange={handleChange}
                value={roomFormData.roomType}
              ></input>
              <label htmlFor="image" className="h6 my-2">
                Image
              </label>
              <input
                name="image"
                id="image"
                placeholder="image"
                className="my-2"
                onChange={handleChange}
                value={roomFormData.image}
              ></input>
              <div>
                {roomFormData.image && (
                  <img
                    name="image"
                    src={roomFormData.image}
                    className="img-thumbnail my-2 mb-3 shadow"
                    width="400px"
                  />
                )}
              </div>
            </div>
            <div className="mt-2">
              <button type="submit" className="btn btn-primary me-2">
                Submit
              </button>
              <button type="submit" className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
