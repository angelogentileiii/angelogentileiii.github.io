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
            className="flex justify-start items-center min-h-screen h-auto bg-slate-200 p-4 min-w-[320px]"
        >
            <div className="pt-20 lg:pt-28">
                <div className="portfolio--section--content">
                    <h1 className="portfolio--section--title">
                        <span className="portfolio--section--title--color">
                            Portfolio
                        </span>{" "}
                        <br />
                    </h1>
                    {error && (
                        <div className="section--error">Error: {error}</div>
                    )}
                    {loading && <div>Loading...</div>}
                    {portfolioData.length > 0 && (
                        <PortfolioItem portfolioData={portfolioData} />
                    )}
                </div>
            </div>
        </section>
    );
};
