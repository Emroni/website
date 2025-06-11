import styled from 'styled-components';

export const Container = styled.a`
    display: inline-block;
    line-height: 1;
    padding: 8px;
    position: relative;
    white-space: nowrap;

    @media (min-width: 640px) {
        padding: 12px;
    }

    @media (min-width: 768px) {
        padding: 16px;
    }

    svg {
        padding-right: 8px;
    }

    span {
        inset: 0;
        position: absolute;
    }

    @media (hover) {
        &:before,
        &:after,
        span:before,
        span:after {
            content: '';
            position: absolute;

            section:nth-child(even) & {
                background-color: var(--white);
            }

            section:nth-child(odd) & {
                background-color: var(--black);
            }
        }

        &:before,
        &:after {
            height: 1px;
            width: 0;
            transition: 0.25s var(--ease-in);
        }

        & span:before,
        & span:after {
            height: 0;
            width: 1px;
            transition: 0.25s var(--ease-out) 0.25s;
        }

        &:before {
            right: 0;
            top: 0;
        }

        &:after {
            bottom: 0;
            left: 0;
        }

        & span:before {
            left: 0;
            top: 0;
        }

        & span:after {
            bottom: 0;
            right: 0;
        }

        &:hover,
        &:focus {
            &:before,
            &:after {
                width: 100%;
            }

            & span:before,
            & span:after {
                height: 100%;
            }

            &:before {
                left: 0;
                right: auto;
            }

            &:after {
                left: auto;
                right: 0;
            }

            & span:before {
                bottom: 0;
                top: auto;
            }

            & span:after {
                bottom: auto;
                top: 0;
            }
        }
    }
`;
