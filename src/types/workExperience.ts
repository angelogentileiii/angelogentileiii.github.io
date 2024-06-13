export interface WorkExperience {
    workDates: [string, string];
    position: string;
    company: string;
    workDetails: string[];
}

export interface ExperienceItemProps {
    workData: WorkExperience[];
}
