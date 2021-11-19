import React from "react";

const RoomsList = ({ rooms }) => {
  return (
    <div>
      <h2>Rooms List</h2>
      <ul>
        Rooms
        <li>{JSON.stringify(rooms)}</li>
      </ul>
    </div>
  );
};

export default RoomsList;
