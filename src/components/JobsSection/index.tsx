'use client';
import { resume } from '@/setup';
import JobBlock from '../JobBlock';
import Link from '../Link';
import Section from '../Section';
import SectionLinks from '../SectionLinks';
import { Container } from './styled';

export default function JobsSection() {
    return (
        <Section title="Work Experience">
            <Container>
                {resume.jobs.map((job, index) => (
                    <JobBlock key={index} {...job} />
                ))}
            </Container>
            <SectionLinks>
                <Link href="/Emre-Koc-Resume.pdf">Download Resume (PDF)</Link>
            </SectionLinks>
        </Section>
    );
}
