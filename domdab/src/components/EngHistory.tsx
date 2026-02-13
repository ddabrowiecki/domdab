import JobCard from "./JobCard";
import SideAnimation from "./SideAnimation";
import redditLogo from "../assets/RedditLogo.png";

import { jobHistory, type Job } from "@/assets/JobData";

const EngHistory = () =>
  jobHistory.map((job: Job) => (
    <SideAnimation logoSource={redditLogo}>
      <JobCard job={job} />
    </SideAnimation>
  ));

export default EngHistory;
