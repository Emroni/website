import _ from 'lodash';
import styled, { css } from 'styled-components';

export const Title = styled.h4`
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    transition: opacity 0.5s var(--ease), transform 0.5s var(--ease);

    &:not(.active) {
        opacity: 0;
        transform: translateX(-4px);
    }
`;

export const Info = styled.div`
    font-size: 16px;
    font-weight: 200;
    margin: 0;
    transition: opacity 0.5s var(--ease), transform 0.5s var(--ease);

    &:not(.active) {
        opacity: 0;
        transform: translateX(-4px);
    }
`;

export const Container = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0 0 0 12px;
    position: relative;

    &:before {
        background-color: currentColor;
        content: '';
        height: 0;
        left: 0;
        position: absolute;
        top: 6px;
        transition: height 0.5s var(--ease);
        width: 1px;
    }

    &.active:before {
        height: calc(100% - 12px);
    }
`;

export const Item = styled.li`
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

    ${`.${Container.styledComponentId}`}:not(.active) & {
        opacity: 0;
        transform: translateX(-4px);
    }
`;
