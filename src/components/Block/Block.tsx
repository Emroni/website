'use client';
import Transition from '../Transition/Transition';
import { Heading, List, ListItem, Wrap } from './Block.styled';

export default function Block({ items, title }: BlockProps) {
    return (
        <Transition className="wrap" component={Wrap} fade={false} stall={0.1}>
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
