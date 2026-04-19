import JobCard from "./JobCard";
import { previousCareerData } from "@/data/previousCareerData";
import { type Job } from "@/data/jobData";

const PreviousCareerPage = () =>
  previousCareerData.map((job: Job) => <JobCard job={job} />);

export default PreviousCareerPage;
