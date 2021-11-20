import React, { useState, useEffect } from "react";

const RoomsCheckList = ({ rooms }) => {
  console.log("buildings", rooms);
  const roomsCheckList = rooms.slice(1).map((room) => (
    <div>
      <label key={`roomId-${room.id}`} className="list-group-item">
        <input className="form-check-input me-2" type="checkbox" value="" />
        {room.name}

        {/* <span className="d-flex justify-content-end">Occupied</span>
        <input className="form-check-input me-2" type="checkbox" value="" /> */}
      </label>
    </div>
  ));

  return (
    <div>
      <h3>{rooms[0]}</h3>
      {<div className="list-group">{roomsCheckList}</div>}
    </div>
  );
};

export default RoomsCheckList;
