import styled from 'styled-components';

export const Container = styled.ul`
    align-items: center;
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    list-style-type: none;
    margin: 0 -8px;
    padding: 0;

    @media (min-width: 640px) {
        margin: 0 -16px;
        gap: 24px;
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
`;
