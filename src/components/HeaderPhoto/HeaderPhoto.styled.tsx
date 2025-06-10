import styled, { css } from 'styled-components';

export const Svg = styled.svg`
    fill: transparent;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
`;

export const Container = styled.div`
    border-radius: 9999px;
    height: 56px;
    margin-right: 24px;
    overflow: hidden;
    position: relative;
    width: 56px;

    @media (min-width: 475px) {
        height: 80px;
        margin-right: 32px;
        width: 80px;
    }

    @media (min-width: 640px) {
        height: 96px;
        margin-right: 48px;
        width: 96px;
    }

    @media (min-width: 768px) {
        height: 112px;
        margin-right: 56px;
        width: 112px;
    }

    @media (min-width: 1024px) {
        height: 128px;
        margin-right: 56px;
        width: 128px;
    }

    @media (min-width: 1280px) {
        height: 144px;
        margin-right: 64px;
        width: 144px;
    }
`;

export const Border = styled.circle`
    opacity: 0;
    stroke-dasharray: 0, 157%;
    stroke-width: 6px;
    stroke: var(--blue-500);

    @media (min-width: 475px) {
        stroke-width: 8px;
    }

    @media (min-width: 640px) {
        stroke-width: 12px;
    }

    @media (min-width: 1280px) {
        stroke-width: 16px;
    }

    svg.active & {
        opacity: 1;
        stroke-dasharray: 157%, 0;
        transition: stroke-dasharray 0.5s var(--ease);
    }
`;

export const Picture = styled.picture<HeaderPhotoPictureProps>`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    transition: opacity 0.5s var(--ease) 0.5s, transform 0.5s var(--ease) 0.5s;

    svg:not(.active) + & {
        opacity: 0;
        transform: scale(0.95);
    }

    ${({ $loading }) =>
        $loading &&
        css`
            opacity: 0;
            transform: scale(0.95);
        `}
`;

export const Img = styled.img`
    max-width: 100%;
`;
