import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 0;

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
