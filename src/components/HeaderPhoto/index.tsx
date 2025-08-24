'use client';
import Image from '../Image';
import Transition from '../Transition';
import { Border, Container, Svg, Wrap } from './styled';

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
