import React from "react";

const StatusBar = ({ number, height }) => {
  const colors = ["#007bff", "#e83e8c", "#fd7e14", "#6f42c1", "#17a2b8"];
  const currentColor = colors[number - 1];
  const nextColor = colors[number];
  const lineHeight = height - 20

  return (
    <div className="d-flex flex-column align-items-center">
      {/* Circle */}
      <div
        className="d-flex align-items-center justify-content-center rounded-circle text-white"
        style={{
          width: "50px",
          height: "50px",
          border: `2px solid ${currentColor}`,
        }}
      >
        {number}
      </div>
      {/* Vertical Line */}
      {nextColor && (
        <div
          style={{
            width: "2px",
            height: height || "70px", // Use the dynamic height or fallback to the default height
            background: `linear-gradient(${currentColor}, ${nextColor})`,
          }}
        ></div>
      )}
    </div>
  );
};

export default StatusBar;
