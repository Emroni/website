'use client';
import Icon from '../Icon/Icon';
import Transition from '../Transition/Transition';
import { Container } from './Button.styled';

export default function Button({ children, icon, url }: ButtonProps) {
    return (
        <Transition component={Container} href={url} rel="noopener noreferrer" target="_blank">
            {icon && <Icon name={icon} />}
            {children}
            <span />
        </Transition>
    );
}
