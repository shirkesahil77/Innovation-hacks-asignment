import React from "react";
import Button from "./Button";

const Card = ({ title, icon, buttonLabel = "Download", buttonColor = "light", onClick }) => {
  return (
    <div className="card text-center bg-black border border-1 rounded-4 text-white p-2" style={{ width: "16rem" }}>
      <img
        src={icon}
        alt={title}
        className="card-img-top"
        style={{ height: "150px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Button
          label={buttonLabel}
          color={buttonColor}
          size="sm"
          padding={"6px"}
          rounded={true}
          onClick={onClick || (() => alert("Clicked!"))}
          
        />
      </div>
    </div>
  );
};

export default Card;
