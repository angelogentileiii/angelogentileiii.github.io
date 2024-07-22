import { PortfolioItem } from "../components/index.components";
import useFetchData from "../hooks/useFetchData";
import { PortfolioData, Project } from "../../types/index.types";

export const Portfolio: React.FC = () => {
    const [data, loading, error] = useFetchData<PortfolioData>(
        "/data/portfolioData.json"
    );

    const portfolioData = data ? data.portfolioData : [];

    return (
        <section
            id="portfolio"
            className="block mx-auto justify-start items-center min-h-screen h-auto min-w-[320px] p-4"
        >
            <div className="text-3xl font-bold pt-16 lg:pt-28 dynamic-padding">
                <h3>&mdash; My Portfolio</h3>
            </div>
            <div className="w-full mx-auto max-w-screen">
                {error && <div className="section--error">Error: {error}</div>}
                {loading && <div>Loading...</div>}
                <div className="flex flex-wrap mx-auto gap-6 justify-center">
                    {portfolioData.map((item: Project, index: number) => (
                        <PortfolioItem key={index + item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};
