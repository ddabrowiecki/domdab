import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { type Project } from "@/assets/JobData";

interface ProjectDropdownProps {
  projects: Project[] | null;
}

const ProjectDropdown: React.FC<ProjectDropdownProps> = (props) => (
  <Accordion type="single" collapsible defaultValue="item-1">
    {props.projects &&
      props.projects.map((project: Project) => (
        <AccordionItem key={project.value} value={project.value}>
          <AccordionTrigger>{project.name}</AccordionTrigger>
          <AccordionContent>{project.description}</AccordionContent>
        </AccordionItem>
      ))}
  </Accordion>
);

export default ProjectDropdown;
