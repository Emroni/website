type IconMap = Record<IconName, IconProp>;
type IconName = 'codepen' | 'envelope' | 'github' | 'linkedin' | 'stackoverflow' | 'twitter' | 'upwork';

interface IconProps {
    name: IconName;
}
