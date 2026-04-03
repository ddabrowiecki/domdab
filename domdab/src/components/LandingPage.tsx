import DomProfilePic from "../assets/DomProfilePic.jpg";
import {
  landingPageCopyHead,
  landingPageCopyEnding,
  landingPageCopyItalic,
} from "@/data/utils";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-around mt-5">
        <img className="profile-pic" src={DomProfilePic} />
        <div className="w-[50%]">
          <p className="intro">Hi, I'm Dom!</p>
          <p className="whitespace-pre-wrap pt-5 text-lg">{landingPageCopyHead}</p>
          <p className="whitespace-pre-wrap pt-10 text-base italic">{landingPageCopyItalic}</p>
          <p className="whitespace-pre-wrap pt-10 text-xs">{landingPageCopyEnding}</p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
