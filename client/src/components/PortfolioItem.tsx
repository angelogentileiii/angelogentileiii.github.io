import React from "react";
import { PortfolioData, Project } from "../../types/index.types";

export const PortfolioItem: React.FC<Project> = (project) => {
    const onImageClick = (url: string): void => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const { title, description, image, alt, githubUrl, url } = project;

    return (
        <div className="flex flex-wrap max-w-[425px] pt-16">
            <article className="flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                <img
                    className="relative h-48 w-48 object-cover mx-auto -mt-6 overflow-hidden shadow-lg rounded-xl bg-blue-gray-800 transform transition-transform hover:scale-105 hover:opacity-85"
                    src={image}
                    alt={alt}
                    onClick={() => onImageClick(url)}
                />
                <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                        <h5 className="block mb-2 text-xl font-semibold text-blue-gray-900">
                            {title}
                        </h5>
                        <p className="block mb-2 text-base font-light text-gray-700">
                            {description}
                        </p>
                    </div>
                    <div className="flex flex-wrap align-baseline justify-center m-2">
                        <a
                            className="bg-amber-600 hover:bg-opacity-80 text-white my-2 mx-2 sm:mx-3 py-2 px-4 rounded-md whitespace-nowrap text-center"
                            href={url}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            View Demo
                        </a>
                        <a
                            className="bg-amber-600 hover:bg-opacity-80 text-white my-2 mx-2 sm:mx-3 py-2 px-4 rounded-md whitespace-nowrap text-center"
                            href={githubUrl}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Github Repository
                        </a>
                    </div>
                </div>
            </article>
        </div>
    );
};
