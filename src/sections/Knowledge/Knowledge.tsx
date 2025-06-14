'use client';
import { Block, ResumeLink, Section, Transition } from '@/components';
import { Blocks } from './Knowledge.styled';

export default function Knowledge() {
    return (
        <Section title="Technical Knowledge">
            <Transition component={Blocks} fade={false} stall={0.1}>
                <Block
                    title="Extensive"
                    items="JavaScript,TypeScript,PHP,HTML,CSS,SQL,React,Symfony,WordPress,Node.js,REST APIs,Generators,Three.js,GSAP,Charts,D3.js,Next.js,Automation,Motion Design,Data visualization"
                />
                <Block
                    title="Proficient"
                    items="Tailwind,Bootstrap,Storybook,Jest,D3.js,Pixi.js,Redux,Charts.js,OpenAPI,Swagger,Twig,Blade,Websockets,OpenAPI,Swagger,GraphQL,Mock Service Worker,Scrapers,Azure Functions,Laravel,Nginx,Apache,GitHub Actions,Docker,Deployer,Travis CI,Sketch,Figma ,Photoshop ,Illustrator,After effects"
                />
            </Transition>
            <ResumeLink />
        </Section>
    );
}
