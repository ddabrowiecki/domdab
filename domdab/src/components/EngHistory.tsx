import JobCard from "./JobCard";
import SideAnimation from "./SideAnimation";

import { jobHistory, type Job } from "@/assets/JobData";

const EngHistory = () =>
  jobHistory.map((job: Job) => (
    <>
      <SideAnimation logoSource={job.logoSource}>
      <div>{job.company}</div>
        <JobCard job={job} />
      </SideAnimation>
    </>
  ));

export default EngHistory;
