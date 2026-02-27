import JobCard from "./JobCard";
import SideAnimation from "./SideAnimation";

import { jobHistory, type Job } from "@/assets/JobData";

const EngHistory = () =>
  jobHistory.map((job: Job) => (
    <SideAnimation logoSource={job.logoSource} title={job.company}>
      <JobCard job={job} />
    </SideAnimation>
  ));

export default EngHistory;
