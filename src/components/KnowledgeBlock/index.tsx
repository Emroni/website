'use client';
import Transition from '../Transition';
import { Heading, List, ListItem, Wrap } from './styled';
import { BlockProps } from './types';

export default function Block({ items, title }: BlockProps) {
    return (
        <Transition component={Wrap} fade={false} stall={0.1}>
            <Heading>
                <span>{title}</span>
                <span />
            </Heading>
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
