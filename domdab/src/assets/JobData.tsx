import redditLogo from "../assets/RedditLogo.png";
import quintaraLogo from "../assets/quintaralogo.png"

export interface Project {
  value: string;
  name: string;
  description: string;
  image?: string;
}

export interface Job {
  logoSource?: string;
  logoHeight?: string;
  company: string;
  description: string;
  datesWorked: string;
  projects: Project[] | null;
}

export const jobHistory: Job[] = [
  {
    company: "Quintara Biosciences",
    description: "Front end Software Engineer for a small DNA sequencing company",
    datesWorked: "April 2023 - present",
    logoSource: quintaraLogo,
    logoHeight: "1/5",
    projects: [
      {
        value: "plasmid-order",
        name: "Plasmid DNA Orderform",
        description: "Made an order form for new Plasmid DNA product",
      },
      {
        value: "plasmid-sheets",
        name: "Google Sheets Integration",
        description: "Implemented Google API to pipe data from order form to Google Sheets"
      }
    ],
  },
  {
    company: "Reddit",
    description: "Full stack software engineer developing a tool for the Anti-Evil team to fight abuse at scale",
    datesWorked: "May 2016 - Feb 2023",
    logoSource: redditLogo,
    logoHeight: "full",
    projects: null,
  },
];
