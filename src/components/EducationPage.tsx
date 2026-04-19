import JobCard from "./JobCard";
import { educationData, certificationData } from "@/data/educationData";
import { type Job } from "@/data/jobData";

const EducationPage = () => {
  return (
    <>
      <p className="mt-10">Programming Certifications</p>
      {certificationData.map((job: Job) => (
        <JobCard key={job.company} job={job} />
      ))}
      <p className="mt-10">Education</p>
      <div className="whitespace-pre-wrap">
        {educationData.map((job: Job) => (
          <JobCard key={job.company} job={job} />
        ))}
      </div>
    </>
  );
};

export default EducationPage;
