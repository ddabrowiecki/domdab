import { type Job } from "./jobData";
import redditLogo from "../assets/RedditLogo.png";
import execRepsLogo from "@/assets/ExecReps.png"
import youtubeLogo from "@/assets/youtube-logo-png-46031.png"

export const previousCareerData: Job[] = [
{
    company: "Reddit",
    description: "Safety Operations Specialist (Trust & Safety). Served as the core strategic bridge balancing Operations, Policy, and Engineering teams during a phase of rapid platform scale-up. Ground-level collaborator in defining, testing, and shaping the internal content-review and moderation applications used daily by a growing global workforce. Researched and formulated the beginnings of Reddit’s Content Policy as well as enforcement guidelines",
    datesWorked: "May 2016 - April 2020",
    logoSource: redditLogo,
    projects: [
      {
        value: "policy",
        name: "Crafted enforcement policies and guidelines from scratch",
        description: "Took extremely ad-hoc policy enforcement to a formal system with playbooks, flowcharts and processing guidelines"
      },
      {
        value: "internal-tool",
        name: "Created and pushed through development of an internal review tool",
        description: "Designed UI and crafted data collection processes to create a single screen review tool. Collaborated with engineering teams to develop the MVP and later iterations."
      },
      {
        value: "data-pull",
        name: "Served as metrics lead",
        description: "Crafted data pulls using Zendesk MAQL language to report team metrics, which had not been monitored previously"
      },
      {
        value: "op-int",
        name: "Deep-dive into extremist communities",
        description: "Conduct OPINT research to monitor extremist communities, including cultural trends, language and reference shifts to pre-empt real world harm"
      }
    ],
  },
  {
    company: "YouTube",
    description: "Legal and Policy Associate. Managed high-priority legal, privacy, and policy escalations globally, collaborating with law enforcement and regulatory organizations to mitigate platform risks. Contributed to policy focusing on free speech.",
    datesWorked: "Feb 2014 - May 2016",
    logoSource: youtubeLogo,
    projects: [
      {
        value: "escalations",
        name: "Led several high-profile escalations including translation of content",
        description: "Included sensitive government escalations involving Polish MPs and requests from the President of Ecuador"
      },
    ],
  },
   {
    company: "ExecReps",
    description: "Sales Associate. Raised $300,000+ of revenue from initiating and maintaining client relationships with nationwide C-level executives.",
    datesWorked: "Mar 2013 - Feb 2014",
    logoSource: execRepsLogo,
    projects: [],
  },
]