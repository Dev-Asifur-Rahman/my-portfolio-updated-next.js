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

const NavigateSection = () => {
  const navigationObject = [
    {
      name: "Go Top",
      icon: <ChevronsUp />,
    },
    {
      name: "Projects",
      icon: <LayersMinus />,
    },

    {
      name: "Skills",
      icon: <Wrench />,
    },
    {
      name: "Education",
      icon: <GraduationCap />,
    },
    {
      name: "About",
      icon: <UserRoundPen />,
    },
    {
      name: "Contact",
      icon: <Headset />,
    },
  ];
  return (
    <div className="fab z-20">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-md btn-circle glass-bg"
      >
        <Menu></Menu>
      </div>
      <div className="fab-close">
        <span className="btn btn-circle btn-md glass-bg">✕</span>
      </div>

      {navigationObject?.map((object, index) => {
        return (
          <div key={index} className="tooltip tooltip-left" data-tip={object?.name}>
            <button className="btn btn-md btn-circle glass-bg">
              {object?.icon}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default NavigateSection;
