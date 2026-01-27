import styled from 'styled-components';

export const Container = styled.div`
    -webkit-print-color-adjust: exact;
    font-size: 14px;
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
`;

export const Page = styled.div`
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    font-size: 14px;
    position: relative;

    @media screen {
        border: 1px solid var(--gray-300);
        height: 1056px;
        margin: 24px;
        overflow: hidden;
        width: 816px;
    }
`;

export const Header = styled.header`
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

export const Footer = styled.footer`
    background-color: var(--blue-500);
    bottom: 0;
    height: 12px;
    left: 0;
    position: absolute;
    width: 100%;
`;

export const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;

    svg {
        color: var(--blue-500);
    }
`;

export const EducationItem = styled.div`
    margin-bottom: 16px;
`;

export const TechStackCategory = styled.div`
    margin-bottom: 12px;
`;

export const TechStackItems = styled.ul`
    list-style-type: none;
    margin: 4px 0 4px -6px;
    padding: 0;
`;

export const TechStackItem = styled.li`
    border: 1px solid var(--blue-100);
    padding: 2px 8px;
    border-radius: 12px;
    display: inline-block;
    margin: 0 2px 2px 0;
    font-size: 12px;
`;

export const Job = styled.div`
    margin-bottom: 24px;
`;

export const JobTop = styled.div`
    align-items: baseline;
    display: flex;
    justify-content: space-between;
`;

export const JobDescription = styled.div`
    color: var(--blue-500);
    font-size: 15px;
`;

export const JobItems = styled.ol`
    font-style: italic;
    list-style-type: none;
    margin: 12px 0;
    padding: 0 0 0 12px;

    border-left: 1px solid var(--blue-50);

    li {
        margin-bottom: 6px;
    }
`;
