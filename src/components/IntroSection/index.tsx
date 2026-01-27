import { resume } from '@/setup';
import Section from '../Section';
import Transition from '../Transition';

export default function IntroSection() {
    return (
        <Section title="Hi">
            {resume.intro.map((paragraph, index) => (
                <Transition key={index} component="p">
                    {paragraph}
                </Transition>
            ))}
        </Section>
    );
}
