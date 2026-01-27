import { Skill } from '@/setup';
import { Container, Item, Items } from './styled';

export default function ResumeSkill({ category, items }: Skill) {
    return (
        <Container>
            <h3>{category}</h3>
            <Items>
                {items.map((item, index) => (
                    <Item key={index}>{item}</Item>
                ))}
            </Items>
        </Container>
    );
}
