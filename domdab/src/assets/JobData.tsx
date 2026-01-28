interface Project {

}

interface Job {
    company: string;
    description: string;
    projects: Project[];
}

export const jobHistory: Job[] = []