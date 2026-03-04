import React, { useState } from "react";
import redditLogo from "../assets/RedditLogo.png";

interface SideAnimationProps {
  children: React.ReactNode;
  logoSource: string | undefined;
  companyName: string;
}

const SideAnimation = ({ children, logoSource, companyName }: SideAnimationProps) => {
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
    <>
      <div className="box flex flex-row-reverse items-center justify-between">
        <div className="mr-[35%]">
          <div>{companyName}</div>
        </div>
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
        </div>
      </div>
    </>
  );
};

export default SideAnimation;
