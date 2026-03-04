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
    }, 1000);
  };
  return isOpen ? (
    <div className="mt-4">{children} </div>
  ) : (
    <>
      <div className="box flex flex-row-reverse items-center justify-between mt-4">
        <div className="mr-[35%] text-3xl">
          <div className={`job-name ${fireAnimation ? "fade" : ""}`}>{companyName}</div>
        </div>
        <div
          className={`side-animation ${fireAnimation ? "animate-job" : ""}`}
          onClick={handleOpen}
        >
          <div className="flex items-center h-50">
            <img className={`pl-[2%]`} style={{height: `${logoHeight}`}} src={logoSource} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideAnimation;
