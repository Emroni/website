'use client';
import { Image, Transition } from '@/components';
import { Border, Container, Svg, Wrap } from './HeaderPhoto.styled';

export default function HeaderPhoto() {
    return (
        <Wrap>
            <Transition component={Svg} fade={false}>
                <Border cx="50%" cy="50%" r="50%" />
            </Transition>
            <Container>
                <Image alt="Emre Koc" src="/assets/emre-koc.jpg" />
            </Container>
        </Wrap>
    );
}
