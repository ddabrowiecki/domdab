import JobCard from "./JobCard";
import SideAnimation from "./SideAnimation";

import { jobHistory, type Job } from "@/assets/JobData";

const EngHistory = () =>
  jobHistory.map((job: Job) => (
    <>
      <SideAnimation key={job.company} logoSource={job.logoSource} logoHeight={job.logoHeight} companyName={job.company}>
        <JobCard job={job} />
      </SideAnimation>
    </>
  ));

export default EngHistory;
