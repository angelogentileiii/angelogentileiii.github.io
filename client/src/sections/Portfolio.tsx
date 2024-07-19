import { PortfolioItem } from "../components/index.components";
import useFetchData from "../hooks/useFetchData";
import { PortfolioData } from "../../types/index.types";

export const Portfolio = () => {
    const [data, loading, error] = useFetchData<PortfolioData>(
        "/data/portfolioData.json"
    );

    const portfolioData = data ? data.portfolioData : [];

    return (
        <section
            id="portfolio"
            className="flex flex-col items-center mx-auto w-screen min-h-screen h-auto bg-slate-200 p-4 min-w-[320px]"
        >
            <div className="dynamic-padding pt-20 lg:pt-28 w-screen">
                <h1 className="text-3xl font-bold mb-2">
                    &mdash; My Portfolio
                    <br />
                </h1>
            </div>
            <div>
                {error && <div className="section--error">Error: {error}</div>}
                {loading && <div>Loading...</div>}
                <div className="flex flex-wrap justify-center">
                    {portfolioData.length > 0 && (
                        <PortfolioItem portfolioData={portfolioData} />
                    )}
                </div>
            </div>
        </section>
    );
};
