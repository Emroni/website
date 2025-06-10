'use client';
import HeaderName from '../HeaderName/HeaderName';
import HeaderPhoto from '../HeaderPhoto/HeaderPhoto';
import { Container } from './Header.styled';

export default function Header() {
    return (
        <Container>
            <HeaderPhoto />
            <HeaderName />
        </Container>
    );
}
