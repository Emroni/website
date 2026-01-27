import styled from 'styled-components';

export const Page = styled.div`
    -webkit-print-color-adjust: exact;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    position: relative;
    print-color-adjust: exact;

    section {
        margin-bottom: 24px;
    }

    h1 {
        font-size: 50px;
        font-weight: 200;
        margin: 0;
    }

    h2 {
        color: var(--blue-500);
        font-size: 24px;
        font-weight: 600;
        margin: 0;
    }

    h3 {
        font-size: 18px;
        font-weight: 500;
        margin: 0;
    }

    h4 {
        color: var(--blue-500);
        font-size: 18px;
        font-weight: 300;
        margin: 0;
    }

    p {
        margin: 0 0 12px;
    }

    b {
        font-weight: 600;
    }

    @media screen and (min-width: 1024px) {
        border: 1px solid #ddd;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        height: 1056px;
        margin: 24px auto;
        overflow: hidden;
        width: 816px;
    }
`;

export const Head = styled.div`
    background-color: var(--blue-500);
    color: var(--white);
    line-height: 1;
    padding: 12px;
    text-align: center;

    div {
        font-size: 18px;
        font-weight: 500;
        text-transform: uppercase;
    }
`;

export const Body = styled.div`
    display: flex;
    flex: 1;
`;

export const LeftColumn = styled.div`
    background-color: var(--blue-50);
    flex: 1;
    padding: 16px 24px;
`;

export const RightColumn = styled.div`
    flex: 2;
    padding: 16px 24px;
`;

export const Footer = styled.div`
    background-color: var(--blue-500);
    bottom: 0;
    height: 12px;
    left: 0;
    position: absolute;
    width: 100%;
`;
