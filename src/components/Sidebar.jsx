import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ onPlaygroundClick }) => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (tabName === "playground") {
      onPlaygroundClick();
    }
  };

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3  sidebar">
      <a
        href="/"
        className="d-flex align-items-center mb-2 my-2 text-white justify-content-center text-decoration-none"
      >
        <img
          src="/assets/Images/innovation_logo.png"
          alt="Logo"
          style={{
            width: "70px",
            height: "60px",
            backgroundColor: "transparent",
          }}
          className="me-2"
        />
      </a>

      <ul className="nav nav-pills flex-column mb-auto py-3">
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link ${
              activeTab === "dashboard" ? "text-white active" : ""
            }`}
            onClick={() => handleTabClick("dashboard")}
          >
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${
              activeTab === "playground" ? "text-white active" : ""
            }`}
            onClick={() => handleTabClick("playground")}
          >
            <i className="bi bi-robot me-2"></i> Playground
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${
              activeTab === "ingest" ? "text-white active" : ""
            }`}
            onClick={() => handleTabClick("ingest")}
          >
            <i className="bi bi-wrench-adjustable me-2"></i> Ingest
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${
              activeTab === "automations" ? "text-white active" : ""
            }`}
            onClick={() => handleTabClick("automations")}
          >
            <i className="bi bi-gear me-2"></i> Automations
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${
              activeTab === "activeAutomations" ? "text-white active" : ""
            }`}
            onClick={() => handleTabClick("activeAutomations")}
          >
            <i className="bi bi-puzzle me-2"></i> Active Automations
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${
              activeTab === "integrations" ? "text-white active" : ""
            }`}
            onClick={() => handleTabClick("integrations")}
          >
            <i className="bi bi-bar-chart me-2"></i> Integrations
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${
              activeTab === "messages" ? "text-white active" : ""
            }`}
            onClick={() => handleTabClick("messages")}
          >
            <i className="bi bi-chat-text me-2"></i> Messages
          </a>
        </li>
      </ul>
      {/* User section at the bottom */}
      <div className="d-flex align-items-center mt-auto mb-2">
        <img
          src="/assets/Images/user.png"
          alt="User"
          className="rounded-circle me-2"
          style={{ width: "40px", height: "40px" }}
        />
        <div className="d-flex flex-column">
          <strong className="text-white" style={{ fontSize: "14px" }}>
            John Doe
          </strong>
          <small className="text-gray" style={{ fontSize: "10px" }}>
            john.doe@example.com
          </small>
        </div>
        <i
          className="bi bi-chevron-down text-white"
          style={{ fontSize: "16px" }}
        ></i>
      </div>
    </div>
  );
};

export default Sidebar;
