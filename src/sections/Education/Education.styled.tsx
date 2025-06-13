import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const Content = styled.div`
    margin-left: -16px;
    padding-left: 16px;
    position: relative;

    &:before {
        background-color: var(--white);
        content: '';
        height: 0;
        left: 0;
        position: absolute;
        top: 0;
        transition: height 0.5s var(--ease);
        width: 1px;
    }

    &.active:before {
        height: 100%;
    }
`;

export const Location = styled.span`
    color: var(--blue-50);
    font-size: 18px;
    font-weight: 600;
`;

export const Name = styled.h3`
    font-size: 24px;
    font-weight: 400;
    margin: 4px 0;
`;

export const Info = styled.h3`
    font-size: 18px;
    font-weight: 100;
    margin: 0;
`;
