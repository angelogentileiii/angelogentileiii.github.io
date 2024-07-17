import { NavItemProps } from "../../types/index.types";

export const NavItem: React.FC<NavItemProps> = ({
    item,
    onClick,
    staticItemProps,
    className,
}) => {
    if (staticItemProps) {
        return (
            <a
                href={staticItemProps.href}
                target={staticItemProps.target}
                rel={staticItemProps.rel}
                className={`${className} hover:text-amber-600 transition-colors duration-200 text-sm py-2`}
                onClick={onClick}
            >
                {item}
            </a>
        );
    }

    return (
        <a
            href={`#${item.toLowerCase().replace(" ", "")}`}
            className={`${className} hover:text-amber-600 transition-colors duration-200 text-sm py-2`}
            onClick={onClick}
        >
            {item}
        </a>
    );
};
