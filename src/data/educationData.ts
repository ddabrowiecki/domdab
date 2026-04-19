import { type Job } from "./jobData";
import udacityLogo from "@/assets/udacity.webp"
import calLogo from "@/assets/Cal_logo.png"
import davisLogo from "@/assets/UC_Davis_wordmark.svg.png"

export const certificationData: Job[] = [
{
    company: "Udacity",
    description: "Data Structures and Algorithms Nanodegree",
    datesWorked: "2022",
    logoSource: udacityLogo,
    logoHeight: "50%",
    projects: [],
  },
  {
    company: "Udacity",
    description: "React/Redux Nanodegree",
    datesWorked: "2020",
    logoSource: udacityLogo,
    logoHeight: "50%",
    projects: [],
  },
    {
    company: "Udacity",
    description: "Full Stack Web Developer Nanodegree",
    datesWorked: "2018",
    logoSource: udacityLogo,
    logoHeight: "50%",
    projects: [],
  },
]

export const educationData: Job[] = [
    {
    company: "University of California, Davis",
    description: "",
    datesWorked: "2010 - 2012",
    logoSource: davisLogo,
    logoHeight: "40%",
    projects: [
        {
        value: "major",
        name: "Major",
        description: "M.A., Communication",
      },
        {
        value: "gpa",
        name: "GPA",
        description: "3.35",
      },
              {
        value: "thesis",
        name: "Thesis",
        description: `When Your Favorite TV Icon Turns Out to be a Genius: The Role of Self-activation in Assimilation of Behavior. 
        
        Conducted a social science experiment exploring behavioral assimilation of trait intelligence in relation to media personalities exhibiting intelligence, or lack thereof, experienced through television.`,
      },
    ],
  },
   {
    company: "University of California, Berkeley",
    description: "",
    datesWorked: "2003 - 2007",
    logoSource: calLogo,
    logoHeight: "100%",
    projects: [
         {
        value: "major",
        name: "Major",
        description: "B.A., History. B.A., Slavic Cultures",
      },
      {
        value: "honors",
        name: "Honors",
        description: "Magna Cum Laude, History",
      },
        {
        value: "gpa",
        name: "GPA",
        description: "3.81",
      },
              {
        value: "thesis",
        name: "Thesis",
        description: `Aljamiado Literature: A Window onto the Culture of the Muslims of Reconquered Spain.
        
        Analyzed 15th Century documents written in Middle Spanish using the Arabic alphabet to gain insight into the Mudejar (Spanish Muslim) communities of Medieval Spain. All translation was my own.`,
      },
    ],
  },
]