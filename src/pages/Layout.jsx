import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatSidebar from "../components/ChatSidebar";
import PlaygroundCard from "../components/PlaygroundCard"; // Corrected the import
import StatusBar from "../components/StatusBar"; // Assuming you have a StatusBar component
import Button from "../components/Button";
import PlayGround from "./PlayGround";

const Layout = () => {
  const [showChatSidebar, setShowChatSidebar] = useState(false);

  const toggleChatSidebar = () => {
    setShowChatSidebar((prev) => !prev);
  };

  const recentItems = [
    { icon: "bi-chat-left", text: "Customer Service Automation" },
    { icon: "bi-box", text: "Inventory Management" },
    { icon: "bi-arrows-clockwise", text: "Market Dynamics" },
  ];

  const last30DaysItems = [
    { icon: "bi-chat-left", text: "Customer Service Automation" },
    { icon: "bi-box", text: "Inventory Management" },
    { icon: "bi-arrows-clockwise", text: "Market Dynamics" },
  ];

  const steps = [
    {
      id: 1,
      title: "Customer Information Collection",
      description:
        "User enters personal details (eg. name, email, phone number) and submits it.",
    },
    {
      id: 2,
      title: "Account Setup",
      description:
        "User sets up credentials, output is account creation triggered after submission.",
    },
    {
      id: 3,
      title: "Email Verification",
      description: "System sends a verification email to the user.",
    },
    {
      id: 4,
      title: "Document Upload and Verification",
      description: "Documents are verified after user uploads and submits.",
    },
    {
      id: 5,
      title: "Account Creation",
      description:
        "Account is created successfully and message is sent via email.",
    },
  ];

  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      {/* Fixed Sidebar */}
      <div
        className="bg-dark text-white"
        style={{ width: "250px", height: "100vh" }}
      >
        <Sidebar onPlaygroundClick={toggleChatSidebar} />
      </div>

      {/* ChatSidebar: Display next to Sidebar */}
      {showChatSidebar && (
        <div
          className="bg-dark text-white"
          style={{ width: "300px", height: "100vh" }}
        >
          <ChatSidebar
            title="Automate Chat"
            recentItems={recentItems}
            last30DaysItems={last30DaysItems}
          />
        </div>
      )}
      <PlayGround/>
    </div>
  );
};

export default Layout;
