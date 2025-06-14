'use client';
import { useAnalytics } from '@/contexts/Analytics/Analytics';
import { Container, Content } from './Link.styled';

export default function Link({ children, href }: LinkProps) {
    const analytics = useAnalytics();

    function handleClick() {
        analytics.trackEvent('link', href, children);
    }

    return (
        <Container href={href} rel="noopener noreferrer" target="_blank" onClick={handleClick}>
            <Content>{children}</Content>
        </Container>
    );
}
