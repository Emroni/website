import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type IconMap = Record<IconName, IconProp>;
export type IconName =
    | 'codepen'
    | 'envelope'
    | 'github'
    | 'globe'
    | 'linkedin'
    | 'phone'
    | 'stackoverflow'
    | 'twitter'
    | 'upwork';

export interface IconProps {
    name: IconName;
}
