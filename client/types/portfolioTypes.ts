export interface Project {
    title: string;
    description: string;
    image: string;
    alt: string;
    url: string;
    githubUrl: string;
}

export interface PortfolioData {
    portfolioData: Project[];
}
