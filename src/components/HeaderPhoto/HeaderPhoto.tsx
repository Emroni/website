'use client';
import { Transition } from '@/components';
import { useEffect, useState } from 'react';
import { Border, Container, Img, Picture, Svg } from './HeaderPhoto.styled';

export default function HeaderPhoto() {
    const [src, setSrc] = useState<string | undefined>(undefined);

    useEffect(() => {
        const image = new window.Image();
        image.onload = () => setSrc(image.src);
        image.src = '/assets/emre-koc.jpg';
    }, []);

    return (
        <Container>
            <Transition component={Svg} fade={false}>
                <Border cx="50%" cy="50%" r="50%" />
            </Transition>
            <Picture $loading={!src}>
                <Img alt="Emre Koc" src={src} />
            </Picture>
        </Container>
    );
}
