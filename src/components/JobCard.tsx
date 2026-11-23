import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { type Job } from "@/data/jobData";
import ProjectDropdown from "./ProjectDropdown";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card className="content-card mt-5 sm:flex-row sm:items-center sm:gap-0">
      <div className="flex w-full flex-col items-center sm:w-3/5">
        <CardHeader className="w-full justify-items-center text-lg text-center">
          <div className="flex w-full items-center justify-center gap-4">
            <CardTitle>{job.company}</CardTitle>
            <Badge variant="outline">{job.datesWorked}</Badge>
          </div>
          <CardDescription className="w-full text-center text-white sm:w-1/2">
            {job.description}
          </CardDescription>
        </CardHeader>
        <div className="flex h-50 w-full items-center justify-center">
          <img
            className={`h-32 object-contain ${
              job.company === "Quintara Biosciences" ? "w-56 pl-4" : "w-48"
            }`}
            src={job.logoSource}
            alt={`${job.company} logo`}
          />
        </div>
      </div>
      <CardContent className="w-full sm:w-2/5">
        <ProjectDropdown projects={job.projects} />
      </CardContent>
    </Card>
  );
};

export default JobCard;
