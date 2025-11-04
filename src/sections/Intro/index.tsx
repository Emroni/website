import { Section, Transition } from '@/components';

export default function Intro() {
    return (
        <Section title="Hi">
            <Transition component="p">
                I&apos;m a Senior Software Engineer with nearly 20 years of experience creating web applications,
                including more than a decade leading teams as a Technical Lead. Specialized in TypeScript, React, and
                Node.js, I focus on building user-first, scalable, and maintainable digital products.
            </Transition>
            <Transition component="p">
                I have a consistent record of rapidly delivering high-quality code and providing valuable guidance on
                processes and structure. I excel at communicating with both technical and non-technical teams, aligning
                engineering decisions with business goals to drive meaningful results. My work is both creative and
                methodical, showcasing my passion for programming.
            </Transition>
        </Section>
    );
}
