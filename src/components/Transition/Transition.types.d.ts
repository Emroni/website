interface TransitionProps {
    [prop: string]: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    fade?: boolean;
    stall?: number;
    tag?: React.ElementType;
}
