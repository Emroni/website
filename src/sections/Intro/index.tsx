import { Section, Transition } from '@/components';
import { resume } from '@/setup';

export default function Intro() {
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
