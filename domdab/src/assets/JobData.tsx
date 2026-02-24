export interface Project {
  value: string;
  name: string;
  description: string;
  image?: string;
}

export interface Job {
  company: string;
  description: string;
  projects: Project[] | null;
}

export const jobHistory: Job[] = [
  {
    company: "Quintara Biosciences",
    description: "I work here now",
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
    projects: null,
  },
];
