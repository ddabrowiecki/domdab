import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { type Job } from "@/assets/JobData";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  console.log(job)
  return (
    <Card className="content-card">
      <CardHeader>
        <CardTitle>{job.company}</CardTitle>
        <CardDescription>{job.description}</CardDescription>
      </CardHeader>
      <CardContent>{/* <p>Card Content</p> */}</CardContent>
    </Card>
  );
};

export default JobCard;
