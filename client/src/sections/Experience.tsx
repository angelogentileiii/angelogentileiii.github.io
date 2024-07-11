import ExperienceItem from "../components/ExperienceItem";
import { ExperienceData } from "../../types";

// Fetch Data Hook
import useFetchData from "../hooks/useFetchData";

export const Experience = () => {
    const [data, loading, error] = useFetchData<ExperienceData>(
        "client/public/data/workData.json"
    );

    const workData = data ? data.workData : [];

    return (
        <section id="experience" className="section--container">
            <div className="experience--section--content--box">
                <div className="experience--section--content">
                    <h1 className="experience--section--title">
                        <span className="experience--section--title--color">
                            Experience
                        </span>{" "}
                        <br />
                    </h1>
                    {error && (
                        <div className="section--error">Error: {error}</div>
                    )}
                    {loading && <div>Loading...</div>}
                    {workData.length > 0 && (
                        <ExperienceItem workData={workData} />
                    )}
                </div>
            </div>
        </section>
    );
};
