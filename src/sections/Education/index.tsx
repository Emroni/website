'use client';
import { Section, Transition } from '@/components';
import { Container, Content, Location, Name } from './styled';

export default function Education() {
    return (
        <Section title="Education">
            <Container>
                <Transition component={Content}>
                    <Name>Communication and Multimedia Design</Name>
                    <Location>2010 - 2013 | The Hague University of Applied Sciences</Location>
                    <div>Bachelor of Information and Communication Technology</div>
                </Transition>
                <Transition component={Content}>
                    <Name>Mechanical Engineering</Name>
                    <Location>2007 - 2009 | Delft University of Technology</Location>
                    <div>Attended classes in mathematics and physics</div>
                </Transition>
            </Container>
        </Section>
    );
}
