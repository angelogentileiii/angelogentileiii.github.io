export interface NavItemProps {
    item: string;
    onClick: () => void;
    staticItemProps?: {
        href: string;
        target: string;
        rel: string;
    };
    className: string;
}

export interface DropDownProps {
    sections: string[];
    isOpen: boolean;
    onClick: () => void;
    activeSection: string;
}
