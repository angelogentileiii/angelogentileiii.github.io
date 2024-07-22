import { techStack } from "../assets/index";

export const TechStack: React.FC = () => {
    const cleanLogoNames = techStack.map((logoPath) => {
        const fileName = logoPath.substring(logoPath.lastIndexOf("/") + 1);
        return fileName.replace(".png", "");
    });

    return (
        <div
            id="techstack"
            className="flex flex-wrap justify-center items-center space-x-6 lg:space-x-16 my-4 max-w-full"
        >
            {techStack.map((item, index) => {
                return (
                    <img
                        className="w-[4.75rem] h-[4.75rem] m-2 rounded-lg"
                        key={index + item}
                        src={item}
                        alt={`Tech Stack Item ${cleanLogoNames[index]}`}
                    />
                );
            })}
        </div>
    );
};
