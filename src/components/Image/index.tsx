'use client';
import { useEffect, useState } from 'react';
import { Img, Picture } from './styled';
import { ImageProps } from './types';

export default function Image({ alt, height, src, width }: ImageProps) {
    const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (src) {
            const image = new window.Image();
            image.onload = () => setImgSrc(src);
            image.src = src;
        }
    }, [src]);

    return (
        <>
            <Picture>
                <Img $height={height} $width={width} alt={alt} src={imgSrc} />
            </Picture>
        </>
    );
}
