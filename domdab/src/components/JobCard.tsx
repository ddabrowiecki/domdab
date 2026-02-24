import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { type Job } from "@/assets/JobData";
import ProjectDropdown from "./ProjectDropdown";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card className="content-card">
      <CardHeader>
        <CardTitle>{job.company}</CardTitle>
        <CardDescription>{job.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ProjectDropdown projects={job.projects} />
      </CardContent>
    </Card>
  );
};

export default JobCard;
