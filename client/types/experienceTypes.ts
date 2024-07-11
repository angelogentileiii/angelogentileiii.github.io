export interface Experience {
    workDates: number | [number, string];
    position: string;
    company: string;
    workDetails: string[];
}

export interface ExperienceData {
    workData: Experience[];
}
