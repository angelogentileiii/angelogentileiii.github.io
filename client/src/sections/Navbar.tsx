import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { NavItem, DropdownMenu } from "../components/index.components";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [smallWindow, setSmallWindow] = useState(window.innerWidth < 640);
    const [scrollY, setScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState("");

    // const sections = ["About", "Experience", "Portfolio", "Contact", "Resume"];
    const sections = ["About", "Experience", "Portfolio", "Resume"]; // No Contact section for now

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const handleLinkClick = () => {
        if (isOpen) toggleMenu();
    };

    useEffect(() => {
        const handleResize = () => {
            setSmallWindow(window.innerWidth < 640);
            if (window.innerWidth >= 640 && isOpen) {
                setIsOpen(false);
            }
        };

        const handleScroll = () => {
            setScrollY(window.scrollY);

            let currentSection = "";
            sections.forEach((section) => {
                const element = document.getElementById(section.toLowerCase());
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (
                        rect.top <= window.innerHeight / 3.75 &&
                        rect.bottom >= window.innerHeight / 3.75
                    ) {
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isOpen]);

    return (
        <header
            id="navBar"
            className={`fixed top-0 w-full py-3 z-50 transition-colors duration-500 ${
                scrollY > 100 ? "bg-white" : "bg-transparent"
            }`}
        >
            <nav className="flex max-w-7xl mx-auto justify-between items-center h-full">
                <div
                    className={`transition-opacity duration-1000 ${
                        smallWindow ? "opacity-0" : "opacity-100"
                    } hidden md:flex md:space-x-16 flex-grow justify-center`}
                >
                    {sections.map((item: string, index: number) => {
                        const textColor =
                            activeSection === item
                                ? "text-amber-600"
                                : scrollY > 100
                                ? "text-gray-800"
                                : "text-white";
                        if (item !== "Resume") {
                            return (
                                <NavItem
                                    key={index + item}
                                    item={item}
                                    className={textColor}
                                    onClick={handleLinkClick}
                                />
                            );
                        } else {
                            return (
                                <NavItem
                                    key={index + item}
                                    item={item}
                                    onClick={handleLinkClick}
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

                <div
                    className={`transition-opacity duration-1000 ${
                        smallWindow ? "opacity-100" : "opacity-0"
                    } md:hidden flex items-center ml-auto`}
                >
                    <button onClick={toggleMenu} className="py-2 px-4">
                        <FaBars
                            className={`text-base transition-transform duration-500 ${
                                isOpen ? "rotate-90 text-amber-600" : ""
                            } ${
                                scrollY > 100 ? "text-gray-800" : "text-white"
                            }`}
                        />
                    </button>
                </div>

                <DropdownMenu
                    sections={sections}
                    isOpen={isOpen}
                    onClick={handleLinkClick}
                    activeSection={activeSection}
                />
            </nav>
        </header>
    );
};
