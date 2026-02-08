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
                    location="The Hague University of Applied Sciences"
                    name="Communication and Multimedia Design"
                />
                <EducationBlock
                    date="2007 - 2009"
                    location="Delft University of Technology"
                    name="Mechanical Engineering"
                />
            </Container>
        </Section>
    );
}
