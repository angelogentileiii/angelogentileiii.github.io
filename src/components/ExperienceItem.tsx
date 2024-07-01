import React from "react";
import { ExperienceData, Experience } from "../types";

const ExperienceItem: React.FC<ExperienceData> = ({ workData }) => {
    return (
        <div>
            <div>
                {workData.map((experience: Experience, expIndex: number) => {
                    const { workDates, workDetails, position, company } =
                        experience;
                    return (
                        <div className="work--event" key={expIndex}>
                            <p className="work--event--dates">
                                {Array.isArray(workDates)
                                    ? workDates[0] + " - " + workDates[1]
                                    : workDates}
                            </p>
                            <h3 className="work--event-position">{position}</h3>
                            <p className="work--event--company">{company}</p>
                            {workDetails.map(
                                (detail: string, detailIndex: number) => (
                                    <p
                                        className="work--event--details"
                                        key={detailIndex}
                                    >
                                        {"- " + detail}
                                    </p>
                                )
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ExperienceItem;
