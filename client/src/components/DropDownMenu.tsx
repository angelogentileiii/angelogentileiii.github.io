import { NavItem } from "./index.components";
import { DropDownProps } from "../../types/index.types";

export const DropdownMenu: React.FC<DropDownProps> = ({
    sections,
    isOpen,
    onClick,
    activeSection,
}) => (
    <div
        className={`absolute right-4 top-10 bg-white shadow-lg p-4 rounded-md transition-opacity duration-700 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >
        <div className="flex flex-col space-y-2">
            {sections.map((item, index) => {
                const textColor =
                    activeSection === item ? "text-amber-600" : "text-gray-800";
                if (item !== "Resume") {
                    return (
                        <NavItem
                            key={index + item}
                            item={item}
                            onClick={onClick}
                            className={textColor}
                        />
                    );
                } else {
                    return (
                        <NavItem
                            key={index + item}
                            item={item}
                            onClick={onClick}
                            staticItemProps={{
                                href: "/assets/pdfs/AGIII-Technical-Resume.pdf",
                                rel: "noopener noreferrer",
                                target: "_blank",
                            }}
                            className={textColor}
                        />
                    );
                }
            })}
        </div>
    </div>
);
