import _ from 'lodash';
import styled, { css } from 'styled-components';

export const Wrap = styled.div`
    margin: 0 -16px;
    position: relative;

    &:before,
    &:after {
        content: '';
        background-color: var(--white);
        top: 12px;
        height: calc(100% - 12px);
        width: 1px;
        position: absolute;
        transition: height 0.25s;
    }

    &:not(.active):before,
    &:not(.active):after {
        height: 0 !important;
    }

    &:before {
        left: 0;
        transition-delay: 0.05s;
        transition-timing-function: var(--ease-in);
    }

    &:after {
        right: 0;
        transition-delay: 0.3s;
        transition-timing-function: var(--ease-out);
    }

    @media (min-width: 640px) {
        margin: 0 -20px;
    }

    @media (min-width: 768px) {
        margin: 0 -24px;
    }
`;

export const Heading = styled.h3`
    display: flex;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 2px;
    line-height: 1;
    margin: 0;
    padding-left: 24px;
    position: relative;
    text-transform: uppercase;
    gap: 4px;

    &:before,
    span:last-child:after {
        content: '';
        background-color: var(--white);
        height: 1px;
        position: absolute;
        left: 0;
        top: 50%;
        transition: width 0.25s var(--ease-in);

        ${`.${Wrap.styledComponentId}`}:not(.active) & {
            width: 0 !important;
        }
    }

    &:before {
        width: 8px;
    }

    span {
        display: inline-block;
        position: relative;
        transition: opacity 0.25s var(--ease) 0.05s, transform 0.25s var(--ease) 0.05s;

        &:last-child {
            flex: 1;
            &:after {
                width: 100%;
            }
        }
        ${`.${Wrap.styledComponentId}`}:not(.active) & {
            opacity: 0;
            transform: translateX(-0.5em);
        }
    }

    @media (min-width: 640px) {
        padding-left: 20px;

        &:before {
            width: 12px;
        }
    }

    @media (min-width: 768px) {
        padding-left: 24px;

        &:before {
            width: 16px;
        }
    }
`;

export const List = styled.ul`
    margin: 0;
    padding: 8px;
    position: relative;

    &:after {
        content: '';
        background-color: var(--white);
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        transition: width 0.25s var(--ease-out) 0.3s;

        ${`.${Wrap.styledComponentId}`}:not(.active) & {
            width: 0 !important;
        }
    }

    @media (min-width: 768px) {
        padding: 12px;
    }
`;

export const ListItem = styled.li`
    display: inline-block;
    margin: 4px;
    padding: 2px 8px;
    position: relative;

    &:before {
        content: '';
        background-color: var(--white);
        opacity: 0.05;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: width 0.25s var(--ease);

        ${`.${Wrap.styledComponentId}`}:not(.active) & {
            width: 0;
        }
    }

    & span {
        display: inline-block;
        transition: opacity 0.25s var(--ease), transform 0.25s var(--ease);

        ${`.${Wrap.styledComponentId}`}:not(.active) & {
            opacity: 0;
            transform: translateX(-0.5em);
        }
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
