import { NavItem } from "./index.components";
import { DropDownProps } from "../../types/index.types";

export const DropdownMenu: React.FC<DropDownProps> = ({ isOpen, onClick }) => (
    <div
        className={`absolute right-4 top-10 bg-white shadow-lg p-4 rounded-md transition-transform duration-300 ${
            isOpen ? "block" : "hidden"
        }`}
    >
        <div className="flex flex-col space-y-2">
            {["About", "Experience", "Portfolio", "Contact"].map(
                (item, index) => (
                    <NavItem key={index} item={item} onClick={onClick} />
                )
            )}
            <div>
                <NavItem
                    item="Resume"
                    onClick={onClick}
                    staticItemProps={{
                        href: "/assets/pdfs/AGIII-Technical-Resume.pdf",
                        rel: "noopener noreferrer",
                        target: "_blank",
                    }}
                />
            </div>
        </div>
    </div>
);
