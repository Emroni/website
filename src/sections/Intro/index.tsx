import { Section, Transition } from '@/components';

export default function Intro() {
    return (
        <Section title="Hi">
            <Transition component="p">
                I&apos;m a Senior Full Stack Developer with nearly 20 years of experience creating web applications.
                Specialized in TypeScript, React, and Node.js, I focus on building user-first, scalable, and
                maintainable products.
            </Transition>
            <Transition component="p">
                I have a consistent record of rapidly delivering high quality code and valuable consultancy on processes
                and structure, as well as the ability to manage teams of developers. My work is both creative and
                methodical, showcasing my passion for programming.
            </Transition>
        </Section>
    );
}
