'use client';
import { Container, Content } from './Link.styled';

export default function Link({ children, href }: LinkProps) {
    return (
        <Container href={href} rel="noopener noreferrer" target="_blank">
            <Content>{children}</Content>
        </Container>
    );
}
