import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { type Job } from "@/assets/JobData";
import ProjectDropdown from "./ProjectDropdown";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card className="content-card">
      <CardHeader>
        <div className="flex justify-between">
        <CardTitle>{job.company}</CardTitle>
        <Badge variant="outline">{job.datesWorked}</Badge>
        </div>
        <CardDescription>{job.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-around">
        <div>Hello</div>
        <ProjectDropdown projects={job.projects} />
      </CardContent>
    </Card>
  );
};

export default JobCard;
