'use client';
import { Section, Transition } from '@/components';
import { Container, Content, Info, Location, Name } from './styled';

export default function Education() {
    return (
        <Section title="Education">
            <Container>
                <Transition component={Content}>
                    <Location>2010 - 2013 @ The Hague University of Applied Sciences</Location>
                    <Name>Communication and Multimedia Design</Name>
                    <Info>Bachelor of Information and Communication Technology</Info>
                </Transition>
                <Transition component={Content}>
                    <Location>2007 - 2009 @ Delft University of Technology</Location>
                    <Name>Mechanical Engineering</Name>
                    <Info>Attended classes in mathematics and physics</Info>
                </Transition>
            </Container>
        </Section>
    );
}
