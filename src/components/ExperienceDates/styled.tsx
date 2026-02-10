import styled from 'styled-components';

export const Container = styled.div`
    color: var(--blue-300);
    font-weight: 400;
    font-size: 14px;
    margin: 0;
    transition:
        opacity 0.5s var(--ease),
        transform 0.5s var(--ease);

    &:not(.active) {
        opacity: 0;
        transform: translateX(-4px);
    }
`;
