'use client';
import EducationBlock from '../EducationBlock';
import Section from '../Section';
import { Container } from './styled';

export default function EducationSection() {
    return (
        <Section title="Education">
            <Container>
                <EducationBlock
                    date="2010 - 2013"
                    degree="Bachelor of Information and Communication Technology"
                    institution="The Hague University of Applied Sciences"
                    study="Communication and Multimedia Design"
                />
                <EducationBlock
                    date="2007 - 2009"
                    institution="Delft University of Technology"
                    study="Mechanical Engineering"
                />
            </Container>
        </Section>
    );
}
