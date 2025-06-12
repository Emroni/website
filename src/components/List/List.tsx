'use client';
import Transition from '../Transition/Transition';
import { Container, Heading, Item, Wrap } from './List.styled';

export default function List({ items, title }: ListProps) {
    return (
        <Transition component={Wrap} fade={false} stall={0.25}>
            {title && <Heading>{title}</Heading>}
            <Container>
                {items.map((item, index) => (
                    <Item key={index}>{item}</Item>
                ))}
            </Container>
        </Transition>
    );
}
