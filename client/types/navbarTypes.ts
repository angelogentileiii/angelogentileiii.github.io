export interface NavItemProps {
    item: string;
    onClick: () => void;
    staticItemProps?: {
        href: string;
        target: string;
        rel: string;
    };
}

export interface DropDownProps {
    isOpen: boolean;
    onClick: () => void;
}
