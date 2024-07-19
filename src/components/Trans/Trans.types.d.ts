interface TransProps {
    [prop: string]: any;
    children?: any;
    className?: string;
    fade?: boolean;
    stall?: number;
    tag?: keyof JSX.IntrinsicElements;
}