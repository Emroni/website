import styled from 'styled-components';

export const Container = styled.ul`
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    list-style-type: none;
    margin: 16px -8px;
    padding: 0;

    @media (min-width: 640px) {
        margin: 24px -12px;
    }

    @media (min-width: 768px) {
        margin: 32px -16px;
        gap: 24px;
    }

    @media (min-width: 1280px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
`;
