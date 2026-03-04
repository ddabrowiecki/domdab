import { type Job } from "@/data/JobData";
import { engProjects } from "@/data/ProjectsData";
import SideAnimation from "./SideAnimation";
import JobCard from "./JobCard";

const EngProjects = () =>
  engProjects.map((project: Job) => (
    <>
      <SideAnimation
        key={project.company}
        logoSource={project.logoSource}
        logoHeight={project.logoHeight}
        companyName={project.company}
      >
        <JobCard job={project} />
      </SideAnimation>
    </>
  ));

export default EngProjects;
