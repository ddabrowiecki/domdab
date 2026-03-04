import { type Job } from "@/data/JobData";
import redditTrackerLogo from "@/assets/RedditTrackerLogo.png";
import writeMomLogo from "@/assets/WMLogo2.png";

export const engProjects: Job[] = [
  {
    company: "Reddit Tracker",
    description:
      "A tool to track Reddit stock price and calculate tax burden for stock options based on financial data",
    datesWorked: "2024",
    logoSource: redditTrackerLogo,
    logoHeight: "80%",
    projects: [
      {
        value: "langs",
        name: "Languages",
        description: "Typescript, Javascript",
      },
      {
        value: "stack",
        name: "Stack",
        description: "React, Redux, Node",
      },
      {
        value: "apis-implemented",
        name: "APIs Implemented",
        description:
          "Alphavantage.co, Google Sheets (to populate with stock data)",
      },
    ],
  },
  {
    company: "Write Mom",
    description: `A mobile app which allows entry/transfer of contacts from a device, 
      and sends notifications to the user on a set schedule reminding them to reach out to the contact -- IN PROGRESS`,
    datesWorked: "2025",
    logoSource: writeMomLogo,
    logoHeight: "55%",
    projects: [
      {
        value: "langs",
        name: "Languages",
        description: "Typescript, Javascript",
      },
      {
        value: "stack",
        name: "Stack",
        description: "React Native, Expo",
      },
      {
        value: "notifs",
        name: "Notifications",
        description: `Ability to set "closeness level" to customize notification schedule: Family, Bestie
        Acquaintance, Business`,
      },
      {
        value: "social management",
        name: "Social Management",
        description: `Keeping track of lots of people is hard! The app tracks location and date when
        contacts are added, and allows for optional pictures and notes relating to each individual added`
      },
      {
        value: "contacts",
        name: "Contact Storage",
        description: `Contacts are stored locally, with no need for extra database architecture`
      }
    ],
  },
  {
    company: "TaRu",
    description: `A mobile app intended to facilitate the hailing of boat taxis in a 
    largely indigenous Panamanian community -- 
    special focus given to "tech disadvantaged" individuals (elderly, less financial means) -- IN PROGRESS`,
    datesWorked: "2026",
    // logoSource: writeMomLogo,
    // logoHeight: "55%",
    projects: [
      {
        value: "langs",
        name: "Languages",
        description: "Typescript, Javascript, Github Copilot",
      },
      {
        value: "stack",
        name: "Stack",
        description: "React Native, Expo, Node, DynamoDB",
      },
      {
        value: "llm",
        name: "LLM Usage",
        description: `Github Copilot was leveraged for significant parts of this app in order
        to ship more quickly`,
      },
    ],
  },
];
