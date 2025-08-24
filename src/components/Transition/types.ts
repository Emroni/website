export interface TransitionProps {
    [props: string]: unknown;
    children?: React.ReactNode;
    className?: string;
    component?: React.ElementType;
    fade?: boolean;
    stall?: number;
    onActive?: () => void;
}
