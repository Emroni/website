import styled from 'styled-components';

export const Heading = styled.div`
    white-space: nowrap;

    @media (min-width: 640px) {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }
`;

export const Title = styled.h3`
    color: var(--blue-500);
    font-size: 24px;
    font-weight: 500;
    margin: 0;
    transition:
        opacity 0.5s var(--ease),
        transform 0.5s var(--ease);

    &:not(.active) {
        opacity: 0;
        transform: translateX(-4px);
    }
`;

export const Description = styled.div`
    font-weight: 500;
    margin: 4px 0 12px;
    transition:
        opacity 0.5s var(--ease),
        transform 0.5s var(--ease);

    &:not(.active) {
        opacity: 0;
        transform: translateX(-4px);
    }
`;

export const Groups = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 640px) {
        margin-left: 8px;
    }
`;
