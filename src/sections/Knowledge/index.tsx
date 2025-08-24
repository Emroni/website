'use client';
import { Block, ResumeLink, Section, Transition } from '@/components';
import { Blocks } from './styled';

export default function Knowledge() {
    return (
        <Section title="Technical Knowledge">
            <Transition component={Blocks} fade={false} stall={0.1}>
                <Block
                    title="Extensive"
                    items="TypeScript,JavaScript,React,Node.js,Next.js,Jest,D3.js,Pixi.js,Three.js,Material UI,SQL,HTML,CSS,REST APIs,Data visualization,Generators,Automation,Motion Design"
                />
                <Block
                    title="Proficient"
                    items="Redux,Sentry,Figma,Tailwind,Storybook,Swagger,Websockets,GraphQL,OpenAI,Azure,GitHub Actions,Heroku,Docker"
                />
            </Transition>
            <ResumeLink />
        </Section>
    );
}
