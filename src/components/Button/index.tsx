'use client';
import { useAnalytics } from '@/contexts/Analytics';
import Icon from '../Icon';
import Transition from '../Transition';
import { Container } from './styled';
import { ButtonProps } from './types';

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
