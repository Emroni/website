'use client';
import { useAnalytics } from '@/contexts/Analytics/Analytics';
import Icon from '../Icon/Icon';
import Transition from '../Transition/Transition';
import { Container } from './Button.styled';

export default function Button({ children, icon, label, url }: ButtonProps) {
    const analytics = useAnalytics();

    function handleClick() {
        analytics.trackEvent('button', url, label);
    }

    return (
        <Transition component={Container} href={url} rel="noopener noreferrer" target="_blank" onClick={handleClick}>
            {icon && <Icon name={icon} />}
            {children || label}
            <span />
        </Transition>
    );
}
