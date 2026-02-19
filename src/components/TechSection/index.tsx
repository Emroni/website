'use client';
import Section from '../Section';
import TechBlock from '../TechBlock';
import Transition from '../Transition';
import { Container } from './styled';

export default function TechSection() {
    return (
        <Section title="Tech Stack">
            <Transition component={Container} fade={false} stall={0.1}>
                <TechBlock
                    title="Leadership"
                    items="Technical Roadmapping,System Architecture,Team Alignment,Code Reviews,Quality Assurance,Technical Interviews,Agile Delivery,Mentorship"
                />
                <TechBlock title="Languages" items="TypeScript,JavaScript,PHP,HTML,CSS" />
                <TechBlock
                    title="Frontend"
                    items="React,React Native,Next.js,Expo,Vite,Webpack,Material UI,Tailwind,Styled Components,TanStack,Apollo GraphQL,Redux,Zustand,GSAP,PixiJS,Three.js,Charts.js,D3.js"
                />
                <TechBlock
                    title="Backend"
                    items="Node.js,NestJS,Express,REST,GraphQL,WebSockets,Socket.io,Data Generation,JWT,OAuth,Zod,Nginx"
                />
                <TechBlock title="Database" items="PostgreSQL,MySQL,SQLite,Redis,TypeORM,Sequelize,Prisma,Firebase" />
                <TechBlock title="Testing" items="Jest,React Testing Library,Playwright,Storybook,Chromatic" />
                <TechBlock title="Infrastructure" items="Docker,Azure,Heroku,GitHub Actions" />
                <TechBlock
                    title="Tools"
                    items="GitHub Copilot,Claude,OpenAI,SonarCube,Prettier,ESLint,Sentry,Swagger,Figma,Mural,LaunchDarkly,GTM"
                />
            </Transition>
        </Section>
    );
}
