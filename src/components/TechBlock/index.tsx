'use client';
import Transition from '../Transition';
import { Heading, List, ListItem, Wrap } from './styled';
import { BlockProps } from './types';

export default function TechBlock({ items, title }: BlockProps) {
    return (
        <Transition component={Wrap}>
            <Heading>{title}</Heading>
            <List>
                {items.split(',').map((item, key) => (
                    <ListItem key={key}>
                        <span>{item}</span>
                    </ListItem>
                ))}
            </List>
        </Transition>
    );
}
