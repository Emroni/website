'use client';
import { ExperienceBlock, Link, Section, SectionLinks } from '@/components';
import { resume } from '@/setup';
import { Container } from './styled';

export default function Experience() {
    return (
        <Section title="Work Experience">
            <Container>
                {resume.jobs.map((job, index) => (
                    <ExperienceBlock key={index} {...job} />
                ))}
            </Container>
            <SectionLinks>
                <Link href="/Emre-Koc-Resume.pdf">Download Resume (PDF)</Link>
            </SectionLinks>
        </Section>
    );
}
