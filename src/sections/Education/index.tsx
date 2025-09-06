'use client';
import { EducationBlock, Section } from '@/components';
import { Container } from './styled';

export default function Education() {
    return (
        <Section title="Education">
            <Container>
                <EducationBlock
                    date="2010 - 2013"
                    degree="Bachelor of Information and Communication Technology"
                    location="The Hague University of Applied Sciences"
                    name="Communication and Multimedia Design"
                />
                <EducationBlock
                    date="2007 - 2009"
                    degree="Bachelor of Information and Communication Technology"
                    location="Delft University of Technology"
                    name="Mechanical Engineering"
                />
            </Container>
        </Section>
    );
}
