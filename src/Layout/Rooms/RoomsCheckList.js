import React from "react";
import { Link } from "react-router-dom";

const RoomsCheckList = ({ rooms, responseOptions }) => {
  console.log("buildings", rooms);
  console.log("Options:", responseOptions);

  //   Create options for the selected room
  const options = () => {
    if (responseOptions !== null || responseOptions.length !== 0) {
      const createOptions = responseOptions.map((option) => (
        <li key={`option-${option.id}`} className="list-group-item">
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            aria-label="..."
          />
          {option.title} - {option.description}
        </li>
      ));

      return createOptions;
    }
  };

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
          <i className="bi bi-check-circle me-2"></i>

          {room.name}
        </button>
      </h2>
      <div
        id={`flush-collapse${index}`}
        className="accordion-collapse collapse"
        aria-labelledby={`flush-heading${index}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          <ul className="list-group">{options()}</ul>
          {/* {JSON.stringify(responseOptions)} */}
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {roomsCheckList}
      </div>
      {/* <div className="list-group">{roomsCheckList}</div> */}
    </div>
  );
};

export default RoomsCheckList;
