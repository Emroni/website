'use client';
import ProfileName from '../ProfileName';
import ProfilePhoto from '../ProfilePhoto';
import { Container } from './styled';

export default function Profile() {
    return (
        <Container>
            <ProfilePhoto />
            <ProfileName />
        </Container>
    );
}
