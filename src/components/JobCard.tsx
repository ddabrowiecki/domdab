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
      <CardHeader className="text-lg">
        <div className="flex justify-around">
          <CardTitle>{job.company}</CardTitle>
          <Badge variant="outline">{job.datesWorked}</Badge>
        </div>
        <CardDescription className="text-white">{job.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between">
        <div className="h-50 flex items-center ml-[10%]">
          <img
            className={`hidden sm:block pl-[2%]`}
            style={{ height: `${job.logoHeight}` }}
            src={job.logoSource}
          />
          {/* <img
            className={`sm:hidden pl-[2%] h-30`}
            src={job.logoSource}
          /> */}
        </div>
        <div className="w-[60%] sm:w-[40%]">
          <ProjectDropdown projects={job.projects} />
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
