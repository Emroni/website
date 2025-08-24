'use client';
import HeaderName from '../HeaderName';
import HeaderPhoto from '../HeaderPhoto';
import Transition from '../Transition';
import { Container } from './styled';

export default function Header() {
    return (
        <Transition component={Container} fade={false}>
            <HeaderPhoto />
            <HeaderName />
        </Transition>
    );
}
