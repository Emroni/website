'use client';
import { Skill } from '@/setup';
import Transition from '../Transition';
import { Heading, List, ListItem, Wrap } from './styled';

export default function SkillBlock({ category, items }: Skill) {
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
