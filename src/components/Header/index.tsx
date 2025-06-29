'use client';
import HeaderName from '../HeaderName';
import HeaderPhoto from '../HeaderPhoto';
import { Container } from './styled';

export default function Header() {
    return (
        <Container>
            <HeaderPhoto />
            <HeaderName />
        </Container>
    );
}
