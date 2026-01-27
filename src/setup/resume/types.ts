export interface Education {
    degree?: string;
    endDate: string;
    field: string;
    institution: string;
    startDate: string;
}

export interface Job {
    company: string;
    description: string;
    endDate: string;
    items: string[];
    link?: string;
    startDate: string;
    title: string;
}

export interface Resume {
    education: Education[];
    intro: string[];
    jobs: Job[];
    profile: string;
    skills: Skill[];
}

export interface Skill {
    category: string;
    items: string[];
}
