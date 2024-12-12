import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ChatSidebar from "../components/ChatSidebar";
import PlaygroundCard from "../components/PlaygroundCard";
import StatusBar from "../components/StatusBar";
import Button from "../components/Button";
import Card from "../components/Card";
import SearchInput from "../components/SearchInput";
import TitleSubtitle from "../components/TitleSubtitle";

const PlayGround = () => {
  const [showChatSidebar, setShowChatSidebar] = useState(false);
  const [cardHeights, setCardHeights] = useState([]);
  const [openCardIndex, setOpenCardIndex] = useState(0); // Track which card is open
  const cardRefs = useRef([]);

  const toggleChatSidebar = () => {
    setShowChatSidebar((prev) => !prev);
  };

  const recentItems = [
    { icon: "bi-chat-left", text: "Customer Service Automation" },
    { icon: "bi-box", text: "Inventory Management" },
    { icon: "bi bi-shop-window", text: "Market Dynamics" },
  ];

  const last30DaysItems = [
    { icon: "bi-chat-left", text: "Customer Service Automation" },
    { icon: "bi-box", text: "Inventory Management" },
    { icon: "bi bi-shop-window", text: "Market Dynamics" },
  ];

  const steps = [
    {
      id: 1,
      title: "Customer Information Collection",
      description:
        "User enters personal details (eg. name, email, phone number) and submits it.",
      cardData: [
        {
          title: "Start",
          description: "Description for Card 1",
          icon: "https://via.placeholder.com/150",
          buttonColor: "success",
          buttonLabel: "Trigger"
        },
        {
          title: "Activity",
          description: "Description for Card 2",
          icon: "https://via.placeholder.com/150",
          buttonColor: "secondary",
          buttonLabel: "Input"
        },
        {
          title: "Result",
          description: "Description for Card 2",
          icon: "https://via.placeholder.com/150",
          buttonColor: "primary",
          buttonLabel: "Output"
        },
      ],
    },
    {
      id: 2,
      title: "Account Setup",
      description:
        "User sets up credentials, account creation triggered after submission.",
      cardData: [
        {
          title: "Card 3",
          description: "Description for Card 3",
          icon: "https://via.placeholder.com/150",
        },
        {
          title: "Card 4",
          description: "Description for Card 4",
          icon: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      id: 3,
      title: "Email Verification",
      description: "System sends a verification email to the user.",
      cardData: [
        {
          title: "Card 5",
          description: "Description for Card 5",
          icon: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      id: 4,
      title: "Document Upload and Verification",
      description: "Documents are verified after user uploads and submits.",
      cardData: [
        {
          title: "Card 6",
          description: "Description for Card 6",
          icon: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      id: 5,
      title: "Account Creation",
      description:
        "Account is created successfully and message is sent via email.",
      cardData: [
        {
          title: "Card 7",
          description: "Description for Card 7",
          icon: "https://via.placeholder.com/150",
        },
      ],
    },
  ];

  useEffect(() => {
    const updateHeights = () => {
      const newHeights = cardRefs.current.map(
        (ref) => ref?.getBoundingClientRect()?.height || 0
      );
      setCardHeights(newHeights);
    };

    updateHeights(); // Initial measurement

    const resizeObserver = new ResizeObserver(updateHeights);
    cardRefs.current.forEach((ref) => {
      if (ref) resizeObserver.observe(ref);
    });

    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  console.log(cardHeights);
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      {/* Fixed Sidebar */}
      <div
        className="bg-dark text-white"
        style={{ width: "250px", height: "100vh" }}
      >
        <Sidebar onPlaygroundClick={toggleChatSidebar} />
      </div>

      {/* ChatSidebar */}
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

      {/* Main Playground Area */}
      <div
        className="bg-dark flex-grow-1 py-4"
        style={{ height: "100vh", overflowY: "auto" }}
      >
        <div className="d-flex align-items-center mb-3 text-white px-4">
          <span className="fs-4">Automate Chat</span>
          <div className="ms-auto ">
            <Button
              icon={"bi bi-send"}
              label="Share"
              color="light"
              border={'border-0'}
              size="sm"
              padding={"3px"}
              onClick={() => alert("Clicked!")}
            />
            <Button
              icon={"bi bi-download"}
              label="Download"
              color="blacl"
              size="sm"
              padding={"6px"}
              rounded={true}
              onClick={() => alert("Clicked!")}
              backgroundColor="white"
            />
          </div>
        </div>

        <div className="p-4 ">
          <div className=" text-white">
            <TitleSubtitle
              icon="bi bi-rocket-takeoff" // Replace with Bootstrap icons
              title="Customer Registration"
              subtitle="Automation Steps"
            />
          </div>
          {/* Status Bars */}
          <div className="d-flex gap-4">
            <div className="d-flex flex-column align-items-center mt-5">
              {steps.map((step, index) => (
                <StatusBar
                  key={step.id}
                  number={step.id}
                  height={
                    cardHeights[index]
                      ? `${cardHeights[index] - 25}px`
                      : `${cardHeights[index] / 2 + 15}px`
                  }
                />
              ))}
            </div>

            {/* Cards */}
            <div className="flex-grow-1">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  ref={(el) => (cardRefs.current[index] = el)} // Attach ref to each card
                >
                  <PlaygroundCard
                    step={step.id}
                    title={step.title}
                    description={step.description}
                    isOpen={index === openCardIndex} // Only open if index matches
                    toggleCard={() =>
                      setOpenCardIndex(index === openCardIndex ? -1 : index)
                    } // Toggle open/close
                  >
                    {/* Render cards for this step */}
                    <div className="d-flex gap-3 flex-wrap">
                      {step.cardData.map((card, cardIndex) => (
                        <Card
                          key={cardIndex}
                          title={card.title}
                          description={card.description}
                          icon={card.icon}
                          buttonLabel={card.buttonLabel}
                          buttonColor={card.buttonColor}
                          onClick={() => alert("File Downloaded!")}
                        />
                      ))}
                    </div>
                  </PlaygroundCard>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-4">
                <SearchInput
                  placeholder="Search..."
                  iconPosition="right"
                  icons={[
                    { position: "right", icon: "bi bi-send" },
                    { position: "right", icon: "bi bi-mic" },
                  ]}
                  className="mb-4"
                  inputClass="no-focus" // Custom class for focus styles
                  iconStyle={{ marginRight: "4px" }} // Reduce the gap between icon and text
                />
              </div>
      </div>
    </div>
  );
};

export default PlayGround;
