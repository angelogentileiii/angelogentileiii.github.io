import { techStack } from "../assets/tech-stack";

export const TechStack: React.FC = () => {
    const imageStyle = {
        width: "75px",
        height: "75px",
        borderRadius: "10px",
        margin: "10px",
    };

    return (
        <div>
            <div>
                {techStack.map((item, itemIndex) => {
                    return (
                        <img
                            className="tech--stack--item"
                            style={imageStyle}
                            key={itemIndex}
                            src={item}
                            alt="Tech Stack Item"
                        />
                    );
                })}
            </div>
        </div>
    );
};
