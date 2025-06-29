'use client';
import Transition from '../Transition';
import { Container, Heading, Item, Wrap } from './styled';
import { ListProps } from './types';

export default function List({ items, title }: ListProps) {
    return (
        <Transition component={Wrap} fade={false} stall={0.1}>
            {title && <Heading>{title}</Heading>}
            <Container>
                {items.map((item, index) => (
                    <Item key={index}>{item}</Item>
                ))}
            </Container>
        </Transition>
    );
}
