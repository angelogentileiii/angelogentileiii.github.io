import React from "react";
import { ExperienceData, Experience } from "../../types/index.types";

export const ExperienceItem: React.FC<ExperienceData> = ({ workData }) => {
    return (
        <div className="mx-auto flex flex-col items-center">
            {workData.map((experience: Experience, index: number) => {
                const { workDates, workDetails, position, company } =
                    experience;
                return (
                    <article
                        className="px-4 md:px-16 my-8 w-full sm:w-[95vw] md:w-[90vw] lg:w-[85vw] text-left"
                        key={index + experience.company + experience.position}
                    >
                        <h3 className="text-xl font-bold">{position}</h3>
                        <p className="text-lg text-amber-600">{company}</p>
                        <p className="text-sm italic">
                            {Array.isArray(workDates)
                                ? workDates[0] + " - " + workDates[1]
                                : workDates}
                        </p>
                        <ul className="leading-relaxed text-sm">
                            {workDetails.map(
                                (detail: string, detailIndex: number) => (
                                    <li className="p-2" key={detailIndex}>
                                        &mdash; {detail}
                                    </li>
                                )
                            )}
                        </ul>
                    </article>
                );
            })}
        </div>
    );
};
