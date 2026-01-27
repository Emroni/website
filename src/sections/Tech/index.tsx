'use client';
import { Link, Section, SectionLinks, TechBlock, Transition } from '@/components';
import { resume } from '@/setup';
import { Container } from './styled';

export default function Tech() {
    return (
        <Section title="Tech Stack">
            <Transition component={Container} fade={false} stall={0.1}>
                {resume.skills.map((skill, index) => (
                    <TechBlock key={index} {...skill} />
                ))}
            </Transition>
            <SectionLinks>
                <Link href="/Emre-Koc-Resume.pdf">Download Resume (PDF)</Link>
            </SectionLinks>
        </Section>
    );
}
