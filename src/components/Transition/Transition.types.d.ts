interface TransitionProps {
    [props: string]: HTMLAttributes;
    children?: React.ReactNode;
    className?: string;
    component?: React.ElementType;
    fade?: boolean;
    stall?: number;
    onActive?: () => void;
}
