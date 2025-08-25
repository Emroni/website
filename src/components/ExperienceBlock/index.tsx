'use client';
import Link from '../Link';
import Transition from '../Transition';
import { Container, Info, Item, Title } from './styled';
import { ExperienceBlockProps } from './types';

export default function ExperienceBlock({ company, date, items, link, title }: ExperienceBlockProps) {
    return (
        <div>
            <Transition component={Title} fade={false}>
                {title}
            </Transition>
            <Transition component={Info} fade={false} stall={0.1}>
                {date} | {link ? <Link href={link}>{company}</Link> : company}
            </Transition>
            <Transition component={Container} fade={false}>
                {items.map((item, index) => (
                    <Item key={index}>{item}</Item>
                ))}
            </Transition>
        </div>
    );
}
