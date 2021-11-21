import React, { useState } from "react";
import { Link } from "react-router-dom";

const RoomsCheckList = ({ rooms, responseOptions }) => {
  console.log("buildings", rooms);
  console.log("Options:", responseOptions);

  // const initialResponseOptions = { ...responseOptions };
  const [optionsStatus, setOptionsStatus] = useState(responseOptions);
  const [notes, setNotes] = useState({ notes: "" });

  console.log("optionsStatus", optionsStatus);

  const handleCheckedStatus = ({ target }) => {
    console.log(target);
    // const checkedStatus =
  };

  const handleNotes = ({ target }) => {
    console.log("name, val", target.name, target.value);
    if (target.name === "notes") {
      setNotes({ notes: target.value });
    }

    // console.log(target.value);
  };

  //   Create options for the selected room
  const options = () => {
    if (responseOptions !== null || responseOptions.length !== 0) {
      const createOptions = responseOptions.map((option) => (
        <div>
          <li key={`option-${option.id}`} className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              aria-label="..."
              onChange={handleCheckedStatus}
              checked={option.checked}
            />
            {option.title} - {option.description}
          </li>
        </div>
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
          <ul className="list-group">
            {options()}

            <li className="list-group-item">
              <label className="row ms-4 mb-2">Notes:</label>
              <textarea
                name="notes"
                rows="3"
                cols="80"
                placeholder="Add more information here..."
                value={notes.notes}
                onChange={handleNotes}
              ></textarea>
            </li>
          </ul>

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
