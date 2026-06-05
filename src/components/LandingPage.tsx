import DomProfilePicNoBG from "../assets/DomProfilePicNoBG.png";
import resume from "@/assets/Dominic V. Dabrowiecki.pdf";
import { Github, Linkedin, Briefcase } from "lucide-react";

const LandingPage = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-60 md:gap-70 relative">
          <div className="flex-1 text-white z-10">
            <h1 className="md:text-7xl text-5xl font-bold mb-6">
              Dominic
              <br />
              Dabrowiecki.
            </h1>

            <div className="w-20 h-1 bg-blue-600 mb-8"></div>

            <div className="flex gap-6 mb-12">
              <a
                href="https://www.linkedin.com/in/dominic-v-dabrowiecki/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.github.com/ddabrowiecki"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition"
              >
                <Github size={18} />
              </a>
              <a
              target="_blank"
                href={`${resume}`}
                className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition"
              >
                <Briefcase size={18} />
              </a>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <h2 className="text-white md:text-2xl font-semibold mb-4">
              Hi, I'm Dom! <br />
              Full-Stack Software Developer,
              <br />
              based in the San Francisco Bay Area.
            </h2>

            <p className="text-blue-700 text-sm leading-relaxed mb-8 right-0">
              I am front-end focused because I love interacting with customers, <br/>
              and have years of experience fighting online abuse on <br/> Trust & Safety teams at YouTube and Reddit
            </p>

            {/* <a href="#story" className="text-blue-600 font-semibold flex items-center gap-2 mb-12 hover:gap-4 transition-all">
              My story <span>→</span>
              </a> */}
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 w-1/4 pointer-events-none pt-24">
            <img
              src={DomProfilePicNoBG}
              alt="Profile"
              className="w-full object-cover transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
