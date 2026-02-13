interface Project {
    name: string;
    description: string;
    image: string;
}

export interface Job {
    company: string;
    description: string;
    projects: Project[] | null;
}

export const jobHistory: Job[] = [{
    company: "Quintara Biosciences",
    description: "I work here now",
    projects: null,
},
    {
    company: "Reddit",
    description: "I used to work here",
    projects: null,
}]