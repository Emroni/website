'use client';
import Transition from '../Transition';
import { Heading, List, ListItem, Wrap } from './styled';
import { TechBlockProps } from './types';

export default function TechBlock({ category, items }: TechBlockProps) {
    return (
        <Transition component={Wrap}>
            <Heading>{category}</Heading>
            <List>
                {items.map((item, key) => (
                    <ListItem key={key}>
                        <span>{item}</span>
                    </ListItem>
                ))}
            </List>
        </Transition>
    );
}
