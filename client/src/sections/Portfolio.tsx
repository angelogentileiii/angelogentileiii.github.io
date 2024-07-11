import PortfolioItem from "../components/PortfolioItem";
import useFetchData from "../hooks/useFetchData";
import { PortfolioData } from "../../types";

export const Portfolio = () => {
    const [data, loading, error] = useFetchData<PortfolioData>(
        "client/public/data/portfolioData.json"
    );

    const portfolioData = data ? data.portfolioData : [];

    return (
        <section id="portfolio" className="section--container">
            <div className="portfolio--section--content--box">
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
