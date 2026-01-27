'use client';
import { resume } from '@/setup';
import EducationBlock from '../EducationBlock';
import Section from '../Section';
import { Container } from './styled';

export default function EducationSection() {
    return (
        <Section title="Education">
            <Container>
                {resume.education.map((education, index) => (
                    <EducationBlock key={index} {...education} />
                ))}
            </Container>
        </Section>
    );
}
