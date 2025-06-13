import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const Heading = styled.h3`
    color: var(--blue-500);
    font-size: 18px;
    font-weight: 400;
    margin: 0 0 16px;
    transition: opacity 0.5s var(--ease), transform 0.5s var(--ease);

    &:not(.active) {
        opacity: 0;
        transform: translateX(-0.5em);
    }
`;
