'use client';
import Link from '../Link';
import Section from '../Section';
import SectionLinks from '../SectionLinks';
import TechBlock from '../TechBlock';
import Transition from '../Transition';
import { Container } from './styled';

export default function TechSection() {
    return (
        <Section title="Tech Stack">
            <Transition component={Container} fade={false} stall={0.1}>
                <TechBlock
                    title="Leadership"
                    items="Technical Roadmapping,System Architecture,Agile Delivery,Cross-Functional Collaboration,Mentorship"
                />
                <TechBlock title="Languages" items="TypeScript,JavaScript,PHP,HTML,CSS" />
                <TechBlock title="Frontend" items="React,Next.js,Material UI,Tailwind,Redux,PixiJS,Three.js,D3.js" />
                <TechBlock title="Backend" items="Node.js,NestJS,Express,REST,GraphQL,WebSockets" />
                <TechBlock title="Database" items="PostgreSQL,MySQL,TypeORM,Sequelize,Prisma,Firebase" />
                <TechBlock title="Testing" items="Jest,React Testing Library,Playwright,Storybook,Chromatic" />
                <TechBlock title="Deployment" items="Docker,Azure,Heroku,GitHub Actions" />
                <TechBlock title="Tools" items="GitHub Copilot,Claude,OpenAI,SonarCube,Sentry,Swagger,Figma,Mural" />
            </Transition>
            <SectionLinks>
                <Link href="/Emre-Koc-Resume.pdf">Download Resume (PDF)</Link>
            </SectionLinks>
        </Section>
    );
}
