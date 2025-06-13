'use client';
import { useMemo } from 'react';
import Transition from '../Transition/Transition';
import { Container, Heading, HeadingArrowLeft, HeadingArrowRight, HeadingContent } from './Section.styled';

export default function Section({ children, heading }: SectionProps) {
    const slug = useMemo(() => {
        return heading.toLowerCase().replace(/\s/g, '-');
    }, [heading]);

    return (
        <Transition component={Container} fade={false} id={slug}>
            <Transition component={Heading} fade={false} stall={0.2}>
                <HeadingArrowLeft width="11px" height="24px" viewBox="0 0 7 16">
                    <polygon fill="currentColor" points="7 2.38923077 5.45 1 0 8 5.45 15 7 13.6107692 2.61 8" />
                </HeadingArrowLeft>
                <HeadingContent>
                    <span>{heading}</span>
                </HeadingContent>
                <HeadingArrowRight width="21px" height="24px" viewBox="0 0 14 16">
                    <polygon
                        fill="currentColor"
                        points="14 2.38923077 12.45 1 7 8 12.45 15 14 13.6107692 9.61 8"
                        transform="rotate(180) translate(-20, -16)"
                    />
                    <polygon fill="currentColor" points="0 15.5806452 1.63098592 16 6 0.419354839 4.36901408 0" />
                </HeadingArrowRight>
            </Transition>
            <div>{children}</div>
        </Transition>
    );
}
