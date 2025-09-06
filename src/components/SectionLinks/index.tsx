'use client';
import Transition from '../Transition';
import { Container } from './styled';
import { SectionLinksProps } from './types';

export default function SectionLinks({ children }: SectionLinksProps) {
    return <Transition component={Container}>{children}</Transition>;
}
