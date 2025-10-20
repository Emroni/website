'use client';
import { KnowledgeBlock, Link, Section, SectionLinks, Transition } from '@/components';
import { Container } from './styled';

export default function Knowledge() {
    return (
        <Section title="Technical Knowledge">
            <Transition component={Container} fade={false} stall={0.1}>
                <KnowledgeBlock title="Foundation" items="TypeScript,JavaScript,PHP,HTML,CSS" />
                <KnowledgeBlock
                    title="Frontend"
                    items="React,Next.js,Material UI,Tailwind,Redux,D3.js,Pixi.js,Three.js"
                />
                <KnowledgeBlock title="Backend" items="Node.js,Symfony,Laravel,REST,GraphQL,WebSockets" />
                <KnowledgeBlock title="Database" items="PostgreSQL,MySQL,Firebase,Sequelize,Prisma" />
                <KnowledgeBlock title="Testing" items="Jest,Playwright,Storybook,Chromatic" />
                <KnowledgeBlock title="Deployment" items="Docker,Kubernetes,AWS,Azure,Heroku,GitHub Actions" />
                <KnowledgeBlock title="Tools" items="Sentry,Swagger,OpenAI,Figma" />
            </Transition>
            <SectionLinks>
                <Link href="https://experimental.emrekoc.io/">Experimental Artwork</Link>
                <Link href="/Emre-Koc-Resume.pdf">Download Resume (PDF)</Link>
            </SectionLinks>
        </Section>
    );
}
