'use client';
import { KnowledgeBlock, ResumeLink, Section, Transition } from '@/components';
import { Container } from './styled';

export default function Knowledge() {
    return (
        <Section title="Technical Knowledge">
            <Transition component={Container} fade={false} stall={0.1}>
                <KnowledgeBlock
                    title="Extensive"
                    items="TypeScript,JavaScript,React,Node.js,Next.js,Jest,D3.js,Pixi.js,Three.js,Material UI,HTML,CSS,REST APIs,Data visualization,Generators"
                />
                <KnowledgeBlock
                    title="Proficient"
                    items="Redux,Sequelize,Figma,Playwright,SQL,Sentry,Tailwind,Storybook,Swagger,Websockets,GraphQL,OpenAI,Azure,GitHub Actions,Heroku,Docker,Automation,Motion Design"
                />
            </Transition>
            <ResumeLink />
        </Section>
    );
}
