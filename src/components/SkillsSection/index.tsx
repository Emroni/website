'use client';
import { resume } from '@/setup';
import Link from '../Link';
import Section from '../Section';
import SectionLinks from '../SectionLinks';
import SkillBlock from '../SkillBlock';
import Transition from '../Transition';
import { Container } from './styled';

export default function SkillsSection() {
    return (
        <Section title="Tech Stack">
            <Transition component={Container} fade={false} stall={0.1}>
                {resume.skills.map((skill, index) => (
                    <SkillBlock key={index} {...skill} />
                ))}
            </Transition>
            <SectionLinks>
                <Link href="/Emre-Koc-Resume.pdf">Download Resume (PDF)</Link>
            </SectionLinks>
        </Section>
    );
}
