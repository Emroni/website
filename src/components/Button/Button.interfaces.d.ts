interface ButtonProps {
    children: any;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit';
    onClick?(): any;
}