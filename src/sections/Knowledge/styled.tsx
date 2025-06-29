import styled from 'styled-components';

export const Blocks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 640px) {
        gap: 24px;
    }

    @media (min-width: 768px) {
        gap: 32px;
    }
`;
