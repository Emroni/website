import { IconName } from '../Icon/types';

export interface ButtonProps {
    children?: React.ReactNode;
    icon?: IconName;
    label: string;
    url: string;
}
