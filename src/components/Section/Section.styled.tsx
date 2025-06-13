import styled from 'styled-components';

export const Container = styled.section`
    position: relative;

    &:nth-child(odd) {
        color: var(--white);

        &:before {
            content: '';
            background-color: var(--blue-500);
            height: 0;
            left: 50%;
            position: absolute;
            top: -16px;
            transform: translate(-50%, -50%) skewY(-2deg);
            transition: height 0.5s var(--ease), top 0.5s var(--ease);
            width: 100%;
            z-index: -10;
        }

        &.active:before {
            height: 100%;
            top: 50%;
        }
    }
`;

export const Content = styled.div`
    margin: 0 auto;
    padding: 48px 32px;

    p {
        margin-bottom: 1em;

        &:last-child {
            margin-bottom: 0;
        }
    }

    @media (min-width: 640px) {
        max-width: 448px;
        padding: 64px 0;

        &:nth-child(odd):before {
            top: -24px;
        }
    }

    @media (min-width: 768px) {
        max-width: 576px;
        padding: 80px 0;

        &:nth-child(odd):before {
            top: -32px;
        }
    }

    @media (min-width: 1024px) {
        max-width: 768px;
        padding: 96px 0;

        &:nth-child(odd):before {
            top: -40px;
        }
    }

    @media (min-width: 1280px) {
        padding: 112px 0;

        &:nth-child(odd):before {
            top: -48px;
        }
    }
`;

export const Heading = styled.h2`
    display: inline-block;
    font-size: 24px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 16px;
    position: relative;
`;

export const HeadingContent = styled.span`
    display: inline-block;
    overflow: hidden;

    span {
        display: inline-block;
        transition: opacity 0.5s var(--ease) 0.25s, transform 0.5s var(--ease) 0.25s;
    }

    h2:not(.active) & > span {
        opacity: 0;
        transform: translateY(-50%);
    }
`;

export const HeadingArrow = styled.svg`
    position: absolute;
    top: 0%;
    transition: opacity 0.5s var(--ease), transform 0.5s var(--ease);
`;

export const HeadingArrowLeft = styled(HeadingArrow)`
    left: -16px;

    h2:not(.active) & {
        opacity: 0;
        transform: translateX(20px);
    }
`;

export const HeadingArrowRight = styled(HeadingArrow)`
    right: -24px;

    h2:not(.active) & {
        opacity: 0;
        transform: translateX(-20px);
    }
`;
