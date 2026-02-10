import _ from 'lodash';
import styled, { css } from 'styled-components';

export const Heading = styled.div`
    white-space: nowrap;

    @media (min-width: 640px) {
        align-items: baseline;
        display: flex;
    }
`;

export const Title = styled.h4`
    color: var(--blue-500);
    font-size: 20px;
    font-weight: 500;
    margin: 0;
    transition:
        opacity 0.5s var(--ease),
        transform 0.5s var(--ease);

    &:before {
        content: '•';
        margin-right: 12px;
    }

    &:not(.active) {
        opacity: 0;
        transform: translateX(-4px);
    }
`;

export const DateRange = styled.div`
    margin-left: 20px;
`;

export const Highlights = styled.ul`
    list-style-type: none;
    margin: 0 0 0 4px;
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

export const Highlight = styled.li`
    font-style: italic;
    padding: 4px;
    position: relative;
    transition:
        opacity 0.5s var(--ease),
        transform 0.5s var(--ease);

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
        (i) => css`
            &:nth-child(${i}) {
                transition-delay: ${0.05 * i}s;
            }
        `,
    )}

    ${`.${Highlights.styledComponentId}`}:not(.active) & {
        opacity: 0;
        transform: translateX(-4px);
    }
`;
