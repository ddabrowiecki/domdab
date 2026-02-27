import React, { useState } from "react";
import redditLogo from "../assets/RedditLogo.png";

interface SideAnimationProps {
  children: React.ReactNode;
  logoSource: string | undefined;
  title: string;
}

const SideAnimation = ({ children, logoSource, title }: SideAnimationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fireAnimation, setFireAnimation] = useState(false);
  const handleOpen = () => {
    setFireAnimation(true);
    setTimeout(() => {
      setFireAnimation(false);
      setIsOpen(true);
    }, 1000);
  };
  return isOpen ? (
    <div className="work-card">{children} </div>
  ) : (
    <div className="box">
      <div
        className={`side-animation ${fireAnimation ? "animate-job" : ""}`}
        onClick={handleOpen}
      >
        <div className="logo-box">
          <img
            className={
              logoSource === redditLogo ? "reddit-logo" : "quintara-logo"
            }
            src={logoSource}
          />
        </div>
        <div>{title} </div>
      </div>
    </div>
  );
};

export default SideAnimation;
