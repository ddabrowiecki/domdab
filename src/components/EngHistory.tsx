import JobCard from "./JobCard";
import SideAnimation from "./SideAnimation";

import { engJobHistory, type Job } from "@/data/jobData";

const EngHistory = () =>
  engJobHistory.map((job: Job) => (
    <div key={job.company}>
      <SideAnimation
        logoSource={job.logoSource}
        companyName={job.company}
      >
        <JobCard job={job} />
      </SideAnimation>
    </div>
  ));

export default EngHistory;
