interface TransitionProps {
    [prop: string]: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    component?: React.ElementType;
    fade?: boolean;
    stall?: number;
    tag?: React.ElementType;
}
