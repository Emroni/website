'use client';
import { trackEvent } from '@/utils';
import Icon from '../Icon';
import Transition from '../Transition';
import { Container } from './styled';
import { ConnectButtonProps } from './types';

export default function ConnectButton({ children, icon, label, url }: ConnectButtonProps) {
    function handleClick() {
        trackEvent('button', url, label);
    }

    return (
        <Transition component={Container} href={url} rel="noopener noreferrer" target="_blank" onClick={handleClick}>
            {icon && <Icon name={icon} />}
            {children || label}
            <span />
        </Transition>
    );
}
