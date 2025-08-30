'use client';
import { ExperienceBlock, ResumeLink, Section } from '@/components';
import { Container } from './styled';

export default function Experience() {
    return (
        <Section title="Work Experience">
            <Container>
                <ExperienceBlock
                    title="Head of Engineering"
                    date="March 2025"
                    company="Krobar.ai"
                    link="https://krobar.ai/"
                    items={[
                        'Developed an AI-powered modeling and forecasting application in React',
                        'Integrated OpenAI assistants to help users build models, interpret results, and generate reports',
                        'Architected and implemented backend services in Node.js for streaming AI interactions and data processing',
                        'Integrated a sophisticated Monte Carlo simulation engine for accurate forecasting and scenario modeling',
                        'Accelerated development by making implementation-level design decisions while staying consistent with design guidelines',
                        'Collaborated closely with design, product, and client teams to align technical solutions with business needs',
                    ]}
                />
                <ExperienceBlock
                    title="Head of Engineering"
                    date="June 2022"
                    company="Kromatic"
                    link="https://kromatic.com/"
                    items={[
                        'Developed 6 interactive white-label business innovation training applications in React',
                        'Led contracted development team for building enterprise-level learning management system',
                        'Standardized code style and architecture of contractor-built applications, improving maintainability and consistency across projects',
                        'Architected content management system where database content could be extended and customized while preserving the original data',
                        'Developed Monte Carlo simulation scripts to calculate scenario-based predictions',
                        'Packaged application deliverables in Docker, supporting both Heroku and complex client-specific on-premises deployments',
                        'Implemented Playwright automated end-to-end tests, covering role based access control',
                    ]}
                />
                <ExperienceBlock
                    title="Senior Full Stack Developer"
                    date="June 2020"
                    company="NodeRelate"
                    link="https://noderelate.com"
                    items={[
                        'Developed frontend of enterprise-level data governance application in React',
                        'Implemented complex data visualizations with D3.js',
                        'Built backend services in Node.js for Azure AD authentication and Postgres database connection',
                        'Built automation tools for generating API endpoints for Azure Functions based on routines exported from Postgres database',
                    ]}
                />
                <ExperienceBlock
                    title="Senior Full Stack Developer"
                    date="February 2020"
                    company="Iglu"
                    link="https://iglu.net"
                    items={[
                        'Developed frontend of internal portal for 250 employees in React',
                        'Implemented invoicing and reporting, linking to Xero accounting software',
                        'Mentored juniors in web development on weekly basis',
                    ]}
                />
                <ExperienceBlock
                    title="Senior Full Stack Developer"
                    date="June 2019"
                    company="SICCODE.com"
                    link="https://just.agency/en"
                    items={[
                        'Expanded and restructured existing PHP web application',
                        'Optimized code for load speeds, targeting page loads under 100ms',
                        "Implemented extensive SEO improvements using microdata and JSON-LD, based on Schema.org's vocabulary",
                    ]}
                />
                <ExperienceBlock
                    title="Digital Lead"
                    date="October 2014"
                    company="Just"
                    link="https://just.agency/en"
                    items={[
                        'Lead of both frontend and backend development, responsible for quality control of all deliverables',
                        'Acted as bridge between project management and development team by handling all technical questions by project mangers, clients and other agencies',
                        'Mentored interns, junior and senior developers in all in-house used programming languages, frameworks and tools',
                        'Consulted clients on processes and architecture based on project requirements',
                        'Developed frontend of websites and applications with React',
                        'Built real-time interactive multi-user applications using WebSockets',
                        'Built 2D and 3D animations in JavaScript for websites',
                        'Built automation tools with JavaScript (Node) and PHP for significantly faster development and delivery of advertising banners',
                        'Developed an internal application with automated repeating tasks, significantly reducing workload for HR, while providing more transparency to employees',
                        'Developed a standardized cookie bar with implementation documentation for use by government agencies',
                        'Created motion graphics in After Effects for advertising videos, making use of ExtendScript to generate variations',
                    ]}
                />
                <ExperienceBlock
                    title="Full Stack Developer"
                    date="September 2011"
                    company="Just"
                    link="https://just.agency/en"
                    items={[
                        'Developed frontend of websites with JavaScript, HTML and CSS from designs in Sketch and Illustrator',
                        'Developed backend systems in PHP for websites and internal applications, using the Symfony, Laravel and CodeIgniter frameworks, with Twig and Blade templating engines',
                        'Built motion graphics for videos and animations for websites in Flash',
                        'Led small teams of frontend and backend developers',
                        'Mentored junior developers in JavaScript and Flash',
                    ]}
                />
                <ExperienceBlock
                    title="Flash Developer"
                    date="June 2009"
                    company="Just"
                    link="https://just.agency/en"
                    items={[
                        'Built full websites in Flash from designs in Photoshop',
                        'Implemented small Flash components into HTML websites, like navigation bars and animations',
                    ]}
                />
                <ExperienceBlock
                    title="Flash Developer"
                    date="March 2008"
                    company="Freelance"
                    items={[
                        'Built and implemented small Flash components for various clients through FlashDen (Envato) marketplace',
                    ]}
                />
            </Container>
            <ResumeLink />
        </Section>
    );
}
