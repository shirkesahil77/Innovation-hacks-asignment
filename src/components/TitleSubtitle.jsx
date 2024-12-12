import React from "react";

const TitleSubtitle = ({ icon, title, subtitle }) => {
  return (
    <div className="d-flex align-items-center bg-dark p-1 rounded">
      {/* Icon container */}
      <div
        className="d-flex justify-content-center align-items-center rounded-circle me-3"
        style={{
          width: "50px",
          height: "50px",
          background:
            "linear-gradient(90deg, #6A11CB, #2575FC)", // Gradient for the icon background
        }}
      >
        <i className={`${icon} text-white`} style={{ fontSize: "20px" }}></i>
      </div>

      {/* Title and subtitle */}
      <div>
        <h5 className="mb-0 text-white" style={{ fontSize: "18px" }}>
          {title}
        </h5>
        <small className="text-white">{subtitle}</small>
      </div>
    </div>
  );
};

export default TitleSubtitle;
