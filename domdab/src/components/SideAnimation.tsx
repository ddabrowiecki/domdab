import React, { useState } from "react";

interface SideAnimationProps {
  children: React.ReactNode;
  logoSource: string;
}

const SideAnimation = ({ children, logoSource }: SideAnimationProps) => {
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
        <img className="work-logo" src={logoSource} />
      </div>
    </div>
  );
};

export default SideAnimation;
