import React from "react";
import { Link } from "react-router-dom";

const RoomsCheckList = ({ rooms, responseOptions }) => {
  console.log("buildings", rooms);
  const roomsCheckList = rooms.slice(1).map((room, index) => (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`flush-heading${index}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${index}`}
          aria-expanded="true"
          aria-controls={`flush-collapse${index}`}
        >
          {room.name}
        </button>
      </h2>
      <div
        id={`flush-collapse${index}`}
        className="accordion-collapse collapse"
        aria-labelledby={`flush-heading${index}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">{JSON.stringify(responseOptions)}</div>
      </div>
    </div>
  ));

  return (
    <div>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        {roomsCheckList}
      </div>
      {/* <div className="list-group">{roomsCheckList}</div> */}
    </div>
  );
};

export default RoomsCheckList;
