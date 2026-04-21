import React, { useState } from "react";

interface SideAnimationProps {
  children: React.ReactNode;
  logoSource: string | undefined;
  logoHeight: string | undefined;
  companyName: string;
}

const SideAnimation = ({
  children,
  logoSource,
  logoHeight,
  companyName,
}: SideAnimationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fireAnimation, setFireAnimation] = useState(false);
  const handleOpen = () => {
    setFireAnimation(true);
    setTimeout(() => {
      setFireAnimation(false);
      setIsOpen(true);
    }, 500);
  };
  return isOpen ? (
    <div className="mt-4">{children} </div>
  ) : (
    <div className="side-wrapper relative">
      <div className="flex items-center justify-center absolute w-[100%] h-[100%]">
        <div className="sm:text-3xl z-40">
          <div className="justify-center whitespace-pre-wrap">
            <div
              className={`job-name ${fireAnimation ? "fade" : ""}`}
              onClick={handleOpen}
            >
              {companyName}
            </div>
          </div>
        </div>
      </div>
      <div className="box flex flex-start items-center mt-4">
        <div
          className={`side-animation sm:side-animation-desktop sm:hover:cursor-pointer ${fireAnimation ? "animate-job" : ""}`}
          onClick={handleOpen}
        >
          <div className="flex items-center hidden sm:flex sm:h-50">
            <img
              className={`pl-[2%] pb-[4%]`}
              style={{ height: `${logoHeight}` }}
              src={logoSource}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideAnimation;
