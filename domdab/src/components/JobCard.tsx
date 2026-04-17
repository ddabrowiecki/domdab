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
    <Card className="content-card mt-5">
      <CardHeader>
        <div className="flex justify-around">
          <CardTitle>{job.company}</CardTitle>
          <Badge variant="outline">{job.datesWorked}</Badge>
        </div>
        <CardDescription>{job.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between">
        <div className="h-50 flex items-center ml-[10%]">
          <img
            className={`pl-[2%]`}
            style={{ height: `${job.logoHeight}` }}
            src={job.logoSource}
          />
        </div>
        <div className="w-[40%]">
          <ProjectDropdown projects={job.projects} />
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
