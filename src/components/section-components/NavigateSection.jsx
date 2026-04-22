import {
  ChevronsUp,
  GraduationCap,
  Headset,
  LayersMinus,
  Menu,
  UserRoundPen,
  Wrench,
} from "lucide-react";
import React from "react";

const NavigateSection = ({ scrollRef }) => {
  const navigationObject = [
    { name: "Go Top", icon: <ChevronsUp />, id: "go-top" },
    { name: "Projects", icon: <LayersMinus />, id: "projects" },
    { name: "Skills", icon: <Wrench />, id: "skills" },
    { name: "Education", icon: <GraduationCap />, id: "education" },
    { name: "About", icon: <UserRoundPen />, id: "about" },
    { name: "Contact", icon: <Headset />, id: "contact" },
  ];

  const getDynamicOffset = () => {
    if (window.innerWidth < 640) {
      
      return 48 + 20;
    }
    if (window.innerWidth < 1024) {

      return 64 + 28;
    }

    return 76 + 36;
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const container = scrollRef.current;

    if (!element || !container) return;

    if (id === "go-top") {
      container.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const offset = getDynamicOffset();

    container.scrollTo({
      top: element.offsetTop - offset,
      behavior: "smooth",
    });
  };

  return (
    <div className="fab z-20">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-md btn-circle glass-bg"
      >
        <Menu />
      </div>

      <div className="fab-close">
        <span className="btn btn-circle btn-md glass-bg">✕</span>
      </div>

      {navigationObject.map((object, index) => (
        <div
          key={index}
          className="tooltip tooltip-left"
          data-tip={object.name}
        >
          <button
            onClick={() => handleScroll(object.id)}
            className="btn btn-md btn-circle glass-bg"
          >
            {object.icon}
          </button>
        </div>
      ))}
    </div>
  );
};

export default NavigateSection;