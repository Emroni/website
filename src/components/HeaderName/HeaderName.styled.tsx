import _ from 'lodash';
import styled, { css } from 'styled-components';

export const Heading = styled.h1`
    font-size: 24px;
    line-height: 32px;

    @media (min-width: 475px) {
        font-size: 30px;
        line-height: 36px;
    }

    @media (min-width: 640px) {
        font-size: 36px;
        line-height: 40px;
    }
    @media (min-width: 768px) {
        font-size: 48px;
        line-height: 48px;
    }

    @media (min-width: 1024px) {
        font-size: 60px;
        line-height: 60px;
    }

    @media (min-width: 1280px) {
        font-size: 72px;
        line-height: 72px;
    }
`;

export const Svg = styled.svg`
    display: block;
    height: 1.3875em;
    width: 7em;
`;

export const Top = styled.text`
    font-weight: 100;
    letter-spacing: 0.1875em;
    text-transform: uppercase;
`;

export const Bottom = styled.text`
    font-size: 0.375em;
    font-weight: 600;
    letter-spacing: 0.1875em;
    text-transform: uppercase;
`;

export const Clip = styled.circle`
    transition: r 1s var(--ease-out);

    ${_.range(1, 10).map(
        i => css`
            &:nth-child(${i}) {
                transition-delay: ${0.05 * (i - 1)}s;
            }
        `
    )}

    svg:not(.active) & {
        r: 0;
    }
`;
