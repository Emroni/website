import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (min-width: 640px) {
        gap: 48px;
    }

    @media (min-width: 768px) {
        gap: 64px;
    }
`;

export const Heading = styled.h3`
    color: var(--blue-500);
    font-size: 16px;
    font-weight: 400;
    margin: 0 0 16px;
    transition:
        opacity 0.5s var(--ease),
        transform 0.5s var(--ease);

    &:not(.active) {
        opacity: 0;
        transform: translateX(-0.5em);
    }
`;

export const Note = styled.p`
    transition:
        opacity 0.5s var(--ease),
        transform 0.5s var(--ease);

    &:not(.active) {
        opacity: 0;
        transform: translateX(-0.5em);
    }
`;
