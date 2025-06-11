import styled from 'styled-components';

export const Picture = styled.picture`
    display: inline-block;
`;

export const Img = styled.img<ImageImgProps>`
    max-width: 100%;
    ${({ $height }) => ($height ? `height: ${$height}px;` : '')}
    ${({ $width }) => ($width ? `width: ${$width}px;` : '')}
`;
