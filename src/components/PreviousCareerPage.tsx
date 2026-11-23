import JobCard from "./JobCard";
import SideAnimation from "./SideAnimation";
import { previousCareerData } from "@/data/previousCareerData";
import { type Job } from "@/data/jobData";

const PreviousCareerPage = () =>
  previousCareerData.map((job: Job) => (
    <div key={job.company}>
      <SideAnimation
        logoSource={job.logoSource}
        companyName={job.company}
      >
        <JobCard job={job} />
      </SideAnimation>
    </div>
  ));

export default PreviousCareerPage;
