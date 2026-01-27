'use client';
import { EducationBlock, Section } from '@/components';
import { resume } from '@/setup';
import { Container } from './styled';

export default function Education() {
    return (
        <Section title="Education">
            <Container>
                {resume.educations.map((education, index) => (
                    <EducationBlock key={index} {...education} />
                ))}
            </Container>
        </Section>
    );
}
