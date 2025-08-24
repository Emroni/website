import styled from 'styled-components';

export const Container = styled.header`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 24px 0;
    position: relative;
    color: var(--white);

    &:before {
        content: '';
        background-color: var(--blue-500);
        height: 0;
        left: 50%;
        position: absolute;
        top: -50px;
        transform: translate(-50%, -50%) skewY(-2deg);
        transition: height 0.5s var(--ease), top 0.5s var(--ease);
        width: 100%;
        z-index: -10;
    }

    &.active:before {
        height: calc(100% + 100px);
        top: calc(50% - 50px);
    }

    @media (min-width: 475px) {
        padding: 32px 0;
    }

    @media (min-width: 768px) {
        padding: 48px 0;
    }

    @media (min-width: 1280px) {
        padding: 64px 0;
    }
`;
