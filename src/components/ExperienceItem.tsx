import React from "react";
import { ExperienceItemProps, WorkExperience } from "../types";

const ExperienceItem: React.FC<ExperienceItemProps> = ({ workData }) => {
    return (
        <div>
            {workData.map((experience: WorkExperience, index: number) => (
                <div className="work--event" key={index}>
                    <p className="work--event--dates">
                        {experience.workDates[0] +
                            " - " +
                            experience.workDates[1]}
                    </p>
                    <h3 className="work--event-position">
                        {experience.position}
                    </h3>
                    <p className="work--event--company">{experience.company}</p>
                    {experience.workDetails.map(
                        (detail: string, index: number) => (
                            <p className="work--event--details" key={index}>
                                {"- " + detail}
                            </p>
                        )
                    )}
                </div>
            ))}
        </div>
    );
};

export default ExperienceItem;
