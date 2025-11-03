import _ from 'lodash';
import styled, { css } from 'styled-components';

export const Wrap = styled.div`
    align-items: baseline;

    @media (min-width: 1024px) {
        display: flex;
        gap: 8px;
    }
`;

export const Heading = styled.h3`
    display: flex;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2px;
    line-height: 1;
    margin: 0 0 4px 0;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 8px;
`;

export const ListItem = styled.li`
    padding: 2px 8px;
    position: relative;

    &:before {
        content: '';
        background-color: var(--blue-500);
        opacity: 0.05;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: width 0.25s var(--ease);
    }

    & span {
        display: inline-block;
        transition: opacity 0.25s var(--ease), transform 0.25s var(--ease);
    }

    ${_.range(1, 40).map(
        i => css`
            &:nth-child(${i}) {
                &:before {
                    transition-delay: ${0.025 * i + 0.3}s;
                }
                & span {
                    transition-delay: ${0.025 * i + 0.35}s;
                }
            }
        `
    )}
`;
