import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 24px;
`;

export const Top = styled.div`
    align-items: baseline;
    display: flex;
    justify-content: space-between;
`;

export const Description = styled.div`
    color: var(--blue-500);
    font-size: 15px;
`;

export const Items = styled.ol`
    font-style: italic;
    list-style-type: none;
    margin: 12px 0;
    padding: 0 0 0 12px;

    border-left: 1px solid var(--blue-50);

    li {
        margin-bottom: 6px;
    }
`;
