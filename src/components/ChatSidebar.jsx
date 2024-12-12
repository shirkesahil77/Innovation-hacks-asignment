import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./ChatSidebar.css";
import Button from "./Button";
import SearchInput from "./SearchInput";

const ChatSidebar = ({ title, recentItems, last30DaysItems }) => {
  return (
    <div className="d-flex flex-column p-3 text-bg-dark ChatSidebar overflow border border-1 border-secondary">
      {/* Title */}
      <h6 className="text-white mb-4 py-3 text-xl">{title}</h6>

      {/* Search Bar */}
      <SearchInput
        placeholder="Search..."
        height="30px"
        iconPosition="left"
        icon="bi bi-search"
        className="mb-4 h4"
        inputClass="no-focus" // Custom class for focus styles
        // iconStyle={{ marginRight: "2px" }} // Reduce the gap between icon and text
      />

      {/* Recent Section */}
      <div className="text-white mb-4" >
        <h6 className="opacity-75" style={{ fontSize: "14px" }}>Recent</h6>
        <ul className="list-group list-group-flush ">
          {" "}
          {/* Use list-group-flush to remove border from list items */}
          {recentItems.map((item, index) => (
            <li
              key={index}
              className="list-group-item bg-dark text-white d-flex align-items-center border-0 my-2"
              style={{ fontSize: "12px" }}
            >
              {" "}
              {/* Remove border */}
              <i className={`bi ${item.icon} me-1 fs-6`}></i> {item.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Last 30 Days Section */}
      <div className="text-white mb-4">
        <h6 className="opacity-75"style={{ fontSize: "14px" }}>Last 30 Days</h6>
        <ul className="list-group list-group-flush">
          {" "}
          {/* Use list-group-flush to remove border from list items */}
          {last30DaysItems.map((item, index) => (
            <li
              key={index}
              className="list-group-item bg-dark text-white d-flex align-items-center border-0 my-2"
              style={{ fontSize: "12px" }}
            >
              {" "}
              {/* Remove border */}
              <i className={`bi ${item.icon} me-1 fs-6`}></i> {item.text}
            </li>
          ))}
        </ul>
      </div>

      {/* New Chat Button */}
      <Button
        icon={"bi bi-plus-square"}
        className={'mt-auto'}
        label="New Chat"
        color="light"
        size="lg"
        padding={"6px"}
        rounded={true}
        onClick={() => alert("Clicked!")}
        
      />
      {/* <button className="btn btn-primary mt-auto">
        <i className="bi bi-plus-lg me-2"></i> New Chat
      </button> */}
    </div>
  );
};

export default ChatSidebar;
