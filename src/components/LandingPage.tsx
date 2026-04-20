import DomProfilePic from "../assets/DomProfilePic.jpg";
import resume from "@/assets/Dabrowiecki-FS2026.pdf";
import {
  landingPageCopyHead,
  landingPageCopyEnding,
  landingPageCopyItalic,
} from "@/data/utils";

const LandingPage = () => {
  return (
    <>
      <div className="mt-10 flex justify-around text-fuchsia-700 underline">
        <a href={`${resume}`} download="DDabrowiecki-2026.pdf">
          <em>Download a Current Resume!</em>
        </a>
        <a href="https://www.github.com/ddabrowiecki">
          <em>See My Projects on Github!</em>
        </a>
        <a href="https://www.linkedin.com/in/dominic-v-dabrowiecki/">
          <em>Check out my LinkedIn Page!</em>
        </a>
      </div>
        <div className="sm:flex sm:flex-row sm:justify-around mt-5">
          <img className="h-[200px] ml-[25%] sm:ml-0 rounded-md sm:h-[450px] sm:w-[350px]" src={DomProfilePic} />
          <div className="mt-10 sm:w-[50%]">
            <p className="intro">Hi, I'm Dom!</p>
            <p className="whitespace-pre-wrap pt-5 text-xs sm:text-lg">
              {landingPageCopyHead}
            </p>
            <p className="whitespace-pre-wrap pt-10 text-xs sm:text-base italic">
              {landingPageCopyItalic}
            </p>
            <p className="whitespace-pre-wrap pt-10 text-xs sm:text-xs">
              {landingPageCopyEnding}
            </p>
          </div>
        </div>
    </>
  );
};

export default LandingPage;
