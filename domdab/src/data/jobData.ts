import redditLogo from "../assets/RedditLogo.png";
import quintaraLogo from "../assets/quintaralogo.png";

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

export const engJobHistory: Job[] = [
  {
    company: "Quintara Biosciences",
    description:
      "Front end Software Engineer for a small DNA sequencing company",
    datesWorked: "April 2023 - January 2025",
    logoSource: quintaraLogo,
    logoHeight: "20%",
    projects: [
      {
        value: "plasmid-order",
        name: "Plasmid DNA Orderform",
        description: "Made an order form for new Plasmid DNA product",
      },
      {
        value: "plasmid-sheets",
        name: "Google Sheets Integration",
        description:
          "Implemented Google API to pipe data from order form to Google Sheets",
      },
    ],
  },
  {
    company: "Reddit",
    description:
      "Full stack software engineer developing a tool for the Anti-Evil team to fight abuse at scale",
    datesWorked: "April 2020 - Feb 2023",
    logoSource: redditLogo,
    logoHeight: "100%",
    projects: [
      {
        value: "report-abuse-queue",
        name: "Report Abuse Queue",
        description: `Created an interface where employees could take action on abusive reports aimed at moderators of various Reddit communities. Large volumes of reports were crashing the legacy system, making an update necessary. 

      I created the interface with the help of a contract designer, and accomplished loading the interface with lazy loading on the frontend, while fetching the reports from a microservice. In order to optimize fetching, I implemented pre-loading with a cron job when a report was created, and pagination on the endpoint to not overload our services.`,
      },
      {
        value: "markdown",
        name: `Markdown Plugin to Highlight "Bad Words" (slurs, curses)`,
        description: `Analytics showed that harassment complaints were more actionable if the text of a post/message contained “bad words” (cursing, slurs, etc.) 
        
        A list was assembled in concert with mods of large subreddits. I created a streamlined system to update this list using a backend tool, with the list persisted in BigQuery. I then created a custom plugin which would detect markdown. 
        
        Not only did this help our software render text as it had appeared on Reddit, lessening confusion for agents, but by creating custom markdown syntax for bad words, after these terms were detected with a regex match, bad words could be highlighted for agents to easily see these words were present in the content.`,
      },
      {
        value: "unblur",
        name: `Targeted unblur of explicit content`,
        description: `Explicit visual content is common on Reddit, and our tool would automatically blur an image if it had been tagged NSFW by a user. However, the blur was extreme to where the content was unclear. 
          
          In an effort to allow agents to guard their mental health by viewing the image selectively, I created an unblurred circle on mouse hover. 
          
          This required some CSS wizardry, making use of 3 separate layers of the image to achieve the desired effect.`,
      },
      {
        value: "profile-pet",
        name: `Profile Pet - Hackathon`,
        description: `Created a Proof of Concept for an animated “pet” on the Reddit profile interface. Similar to a 1990s Tamagotchi, this pet would get “sick” if Reddit had not been visited in some time, with the goal to increase daily active use by users.`,
      },
      {
        value: "hotkeys",
        name: `Keyboard Shortcuts for Faster Complaint Processing`,
        description: `Taking action on a complaint required traversing a large screen in order to click a variety of buttons, based on different punishments. In a playtest setting, I noticed that agents would attempt to maintain their mouse near the buttons to speed up processing. 
        
        I spearheaded a project to create keyboard shortcuts for actions and advancing through a queue, along with a dropdown reference menu in the interface. 
        
        This project resulted of savings of several hundred thousand dollars in annual employee work hours.`,
      },
      {
        value: "codecov",
        name: `Added Codecov to CI/CD Flow`,
        description: `Implemented Codecov to test the percentage of code covered by tests before allowing a PR to build for review. 
        
        With this change, my team was more successful at catching bugs caused by changes in development, reducing our bug tickets by approximately 10% and making our code base more resilient.`,
      },
    ],
  },
];
