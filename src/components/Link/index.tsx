'use client';
import { trackEvent } from '@/utils';
import { Container, Content } from './styled';
import { LinkProps } from './types';

export default function Link({ children, href }: LinkProps) {
    function handleClick() {
        trackEvent('link', href, children);
    }

    return (
        <Container href={href} rel="noopener noreferrer" target="_blank" onClick={handleClick}>
            <Content>{children}</Content>
        </Container>
    );
}
