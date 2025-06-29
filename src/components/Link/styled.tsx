import styled from 'styled-components';

export const Container = styled.a`
    display: inline-block;
    position: relative;

    &:before,
    &:after,
    & > span:after {
        content: '';
        background-color: var(--black);
        position: absolute;
    }

    .background & {
        &,
        &:active,
        &:focus,
        &:hover,
        &:visited {
            color: var(--white);
        }
        &:before,
        &:after,
        & > span:after {
            background-color: var(--white);
        }
    }

    &:before {
        right: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        transition: 0.25s var(--ease-out) 0.25s;
    }

    @media (hover) {
        &:after {
            right: -0.1875em;
            width: 1px;
            animation: link-out 0.5s var(--ease-in) 1 forwards;
        }
        & > span:after {
            top: 0.125em;
            right: -0.1875em;
            height: 1px;
            width: 0;
            transition: width 0.1875s var(--ease-in);
        }
        &:active,
        &:focus,
        &:hover {
            &:before {
                right: -0.1875em;
                width: 0;
                transition: 0.25s var(--ease-in);
            }
            &:after {
                animation-name: link-in;
                animation-timing-function: var(--ease-out);
            }
            & > span:after {
                width: 0.5em;
                transition: width 0.1875s var(--ease-out) 0.3125s;
            }
        }
    }

    @keyframes link-in {
        0%,
        50% {
            top: 100%;
            height: 0;
        }
        75% {
            top: 0.125em;
            height: calc(100% - 0.125em);
        }
        100% {
            top: 0.125em;
            height: 0.5em;
        }
    }

    @keyframes link-out {
        0% {
            top: 0.125em;
            height: 0.5em;
        }
        25% {
            top: 0.125em;
            height: calc(100% - 0.125em);
        }
        50%,
        100% {
            top: 100%;
            height: 0;
        }
    }
`;

export const Content = styled.span`
    display: inline-block;
    position: relative;
`;
