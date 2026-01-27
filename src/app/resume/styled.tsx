import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    textarea {
        box-sizing: border-box;
        display: block;
        min-height: 100px;
        padding: 8px;
        resize: vertical;
        width: 100%;
    }
`;

export const Controls = styled.div`
    background-color: var(--gray-100);
    flex-direction: column;
    flex: 1;
    gap: 16px;
    padding: 16px;
`;

export const Preview = styled.iframe`
    border: none;
    height: 100vh;
    overflow: hidden;
    width: 870px;
`;
