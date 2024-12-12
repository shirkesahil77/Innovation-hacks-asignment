import React, { useState } from "react";
import Button from "./Button";

const PlaygroundCard = ({ step, title, description, isOpen: initialOpen, toggleCard, children }) => {
  return (
    <div
      className="d-flex flex-column align-items-start p-3 rounded-4 border border-1 border-opacity-75 my-4"
      style={{ backgroundColor: "black" }}
    >
      {/* Title and Description Section */}
      <div className="d-flex justify-content-between align-items-center w-100">
        {/* Title and Description */}
        <div>
          <h5 className="mb-1 text-white">{title}</h5>
          <p className="mb-0 text-secondary">{description}</p>
        </div>

        {/* Buttons Section */}
        <div className="d-flex align-items-center gap-2">
          {/* Chevron Button */}
          <button
            className="btn btn-dark border-0 rounded-circle text-white"
            style={{ width: "40px", height: "40px" }}
            onClick={toggleCard} // Toggle on click
          >
            <i
              className={`bi ${initialOpen ? "bi-chevron-up" : "bi-chevron-down"}`}
            ></i>
          </button>

          {/* Assist Button */}
          <Button
            label="Assist"
            color="light"
            size="sm"
            padding={"3px"}
            rounded={true}
            onClick={() => alert("Clicked!")}
          />
        </div>
      </div>

      {/* Display Card Content Below */}
      {initialOpen && <div className="w-100 mt-3">{children}</div>}
    </div>
  );
};

export default PlaygroundCard;
