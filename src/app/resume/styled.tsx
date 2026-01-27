import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const Controls = styled.div`
    background-color: var(--gray-100);
    flex: 1;
    padding: 16px;
`;

export const Preview = styled.iframe`
    border: none;
    height: 100vh;
    overflow: hidden;
    width: 870px;
`;
