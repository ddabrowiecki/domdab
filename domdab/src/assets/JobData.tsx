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
  company: string;
  description: string;
  datesWorked: string;
  projects: Project[] | null;
}

export const jobHistory: Job[] = [
  {
    company: "Quintara Biosciences",
    description: "I work here now",
    datesWorked: "April 2023 - present",
    logoSource: quintaraLogo,
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
    description: "I used to work here",
    datesWorked: "May 2016 - Feb 2023",
    logoSource: redditLogo,
    projects: null,
  },
];
