import { Job } from '@/setup';
import { getDate } from '@/utils';
import { Container, Description, Items, Top } from './styled';

export default function ResumeJob({ company, description, items, link, startDate, title }: Job) {
    return (
        <Container>
            <Top>
                <h3>{title}</h3>
                <div>
                    {getDate(startDate).format('MMMM YYYY')} | <a href={link}>{company}</a>
                </div>
            </Top>
            <Description>{description}</Description>
            <Items>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </Items>
        </Container>
    );
}
