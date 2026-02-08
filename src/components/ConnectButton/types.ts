import { IconName } from '../Icon/types';

export interface ConnectButtonProps {
    children?: React.ReactNode;
    icon?: IconName;
    label: string;
    url: string;
}
