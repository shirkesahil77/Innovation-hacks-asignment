import React from "react";
import './SearchInput.css';

const SearchInput = ({
  placeholder = "Search...",
  height = "40px",
  width = "100%",
  icons = [{ position: "left", icon: "bi bi-search" }, { position: "right", icon: "" }, { position: "right", icon: "" }],
  onChange,
  value,
  className = "",
}) => {
  return (
    <div
      className={`input-group ${className}`}
      style={{
        width,
        height,
        position: "relative", // Ensure positioning context for icons
      }}
    >
      {/* Left icons inside the input */}
      {icons
        .filter((icon) => icon.position === "left")
        .map((icon, index) => (
          <span
            key={`left-icon-${index}`}
            className="input-icon text-white bg-dark"
            style={{
              position: "absolute",
              left: "10px", // Adjust for positioning inside the input
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "18px", // You can adjust the icon size
            }}
          >
            <i className={`${icon.icon}`}></i>
          </span>
        ))}

      {/* Input field */}
      <input
        type="text"
        className={`custom-input ${icons.some((icon) => icon.position === "left")
            ? "padding-left-icon rounded-5 ps-5" // Add padding for left icon
            : ""} ${icons.some((icon) => icon.position === "right") ? "padding-right-icon rounded-5 pe-5" : ""}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        style={{
          height: "100%",
          width: "100%",
          color: "white", // Set text color
          boxShadow: "none",
          outline: "none",
          backgroundColor: "transparent", // Make background transparent
          border: "1px solid #ccc", // Set border color
        }}
      />

      {/* Right icons inside the input */}
      {icons
        .filter((icon) => icon.position === "right")
        .map((icon, index) => (
          <span
            key={`right-icon-${index}`}
            className="input-icon text-white bg-dark g-2 ps-2 me-2"
            style={{
              position: "absolute",
              right: `${10 + (index * 25)}px`, // Adjust the right offset for multiple icons
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "18px", // You can adjust the icon size
            }}
          >
            <i className={`${icon.icon}`}></i>
          </span>
        ))}
    </div>
  );
};

export default SearchInput;
