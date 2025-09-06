import styled from 'styled-components';

export const Container = styled.div`
    margin-left: -16px;
    padding-left: 16px;
    position: relative;

    &:before {
        background-color: var(--blue-500);
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

export const Info = styled.span`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
`;

export const Name = styled.h3`
    color: var(--blue-500);
    font-size: 24px;
    font-weight: 200;
    line-height: 32px;
    margin: 4px 0;
`;
