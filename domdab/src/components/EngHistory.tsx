import JobCard from "./JobCard";
import SideAnimation from "./SideAnimation";

import { engJobHistory, type Job } from "@/data/JobData";

const EngHistory = () =>
  engJobHistory.map((job: Job) => (
    <>
      <SideAnimation
        key={job.company}
        logoSource={job.logoSource}
        logoHeight={job.logoHeight}
        companyName={job.company}
      >
        <JobCard job={job} />
      </SideAnimation>
    </>
  ));

export default EngHistory;
