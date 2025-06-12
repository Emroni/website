import _ from 'lodash';
import styled, { css } from 'styled-components';

export const Wrap = styled.div`
    position: relative;

    &:before {
        background-color: currentColor;
        content: '';
        height: 0;
        left: -16px;
        position: absolute;
        top: 0;
        transition: height 0.5s var(--ease);
        width: 1px;
    }

    &.active:before {
        height: 100%;
    }
`;

export const Heading = styled.h4`
    font-weight: 600;
    margin: 0;
    transition: opacity 0.5s var(--ease), transform 0.5s var(--ease);

    .wrap:not(.active) & {
        opacity: 0;
        transform: translateX(-4px);
    }
`;

export const Container = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    margin-left: -4px;
    padding: 4px;
    position: relative;
    transition: opacity 0.5s var(--ease), transform 0.5s var(--ease);

    &:before {
        background-color: var(--blue-500);
        content: '';
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        transition: opacity 0.25s var(--ease);
        width: 100%;
        z-index: -1;
    }

    &:hover:before {
        opacity: 0.05;
    }

    ${_.range(1, 15).map(
        i => css`
            &:nth-child(${i}) {
                transition-delay: ${0.05 * i}s;
            }
        `
    )}

    .wrap:not(.active) & {
        opacity: 0;
        transform: translateX(-4px);
    }
`;
