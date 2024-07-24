import { ExperienceItem } from "../components/index.components";
import { ExperienceData } from "../../types/index.types";

// Fetch Data Hook
import useFetchData from "../hooks/useFetchData";

export const Experience = () => {
    const [data, loading, error] = useFetchData<ExperienceData>(
        "/data/workData.json"
    );

    const workData = data ? data.workData : [];

    return (
        <section
            id="experience"
            className="flex flex-col items-start min-h-screen h-auto min-w-[320px] p-4"
        >
            <div className="pt-20 lg:pt-28 w-full">
                <div className="dynamic-padding">
                    <h3 className="text-3xl font-bold">
                        &mdash; My Experience
                    </h3>
                </div>
                {error && <div className="section--error">Error: {error}</div>}
                {loading && <div>Loading...</div>}
                <div className="w-full flex justify-center">
                    {workData.length > 0 && (
                        <ExperienceItem workData={workData} />
                    )}
                </div>
            </div>
        </section>
    );
};
