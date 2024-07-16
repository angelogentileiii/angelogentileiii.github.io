import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavItem, DropdownMenu } from "../components/index.components";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const handleLinkClick = () => {
        if (isOpen) toggleMenu();
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen]);

    return (
        <header id="navBar" className=" py-3">
            <nav className="max-w-7xl mx-auto flex justify-between items-center relative h-full">
                <div className="hidden sm:flex sm:space-x-8 flex-grow justify-center">
                    {["About", "Experience", "Portfolio", "Contact"].map(
                        (item, index) => (
                            <NavItem
                                key={index}
                                item={item}
                                onClick={handleLinkClick}
                            />
                        )
                    )}
                    <NavItem
                        item="Resume"
                        onClick={handleLinkClick}
                        staticItemProps={{
                            href: "/assets/pdfs/AGIII-Technical-Resume.pdf",
                            rel: "noopener noreferrer",
                            target: "_blank",
                        }}
                    />
                </div>

                <div className="sm:hidden flex items-center ml-auto">
                    <button onClick={toggleMenu} className="py-2 px-4">
                        {isOpen ? (
                            <FaTimes className="text-base" />
                        ) : (
                            <FaBars className="text-base" />
                        )}
                    </button>
                </div>

                <DropdownMenu isOpen={isOpen} onClick={handleLinkClick} />
            </nav>
        </header>
    );
};
