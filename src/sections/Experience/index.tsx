'use client';
import { ExperienceBlock, Link, Section, SectionLinks } from '@/components';
import { Container } from './styled';

export default function Experience() {
    return (
        <Section title="Work Experience">
            <Container>
                <ExperienceBlock
                    title="Head of Engineering"
                    date="March 2025"
                    description="Technical lead for frontend and backend architecture and development of an AI-native SaaS platform"
                    company="Krobar.ai"
                    link="https://krobar.ai/"
                    items={[
                        'Led development of AI-powered modeling and forecasting application in React',
                        'Integrated OpenAI assistants to help users build models, interpret results, and generate reports',
                        'Architected and implemented backend services in Node.js for streaming AI interactions and data processing',
                        'Integrated sophisticated Monte Carlo simulation engine for accurate forecasting and scenario modeling',
                        'Accelerated development by making implementation-level design decisions while staying consistent with design guidelines',
                        'Collaborated closely with design, product, and client teams to align technical solutions with business needs',
                    ]}
                />
                <ExperienceBlock
                    title="Head of Engineering"
                    date="June 2022"
                    description="Technical lead for distributed frontend and backend teams, delivering multiple production React applications and a custom LMS platform"
                    company="Kromatic"
                    link="https://kromatic.com/"
                    items={[
                        'Developed 6 interactive white-label business innovation training applications in React',
                        'Led contracted development teams building an enterprise-level learning management system',
                        'Conducted technical interviews, code reviews, and performance reviews for staffing decisions',
                        'Standardized code style and architecture of contractor-built applications, improving maintainability and consistency across projects',
                        'Architected content management system where database content could be extended and customized while preserving the original data',
                        'Developed Monte Carlo simulation scripts in Node.js to calculate scenario-based predictions',
                        'Packaged application deliverables in Docker, supporting both Heroku and complex client-specific on-premises deployments',
                        'Implemented Playwright automated end-to-end tests, covering role-based access control',
                    ]}
                />
                <ExperienceBlock
                    title="Lead Full Stack Engineer"
                    date="June 2020"
                    description="Technical lead for frontend and backend teams, overseeing architecture, implementation, and core system integrations"
                    company="NodeRelate"
                    link="https://noderelate.com"
                    items={[
                        'Developed frontend of enterprise-level data governance application in React',
                        'Conducted technical interviews and code reviews, contributing to hiring decisions',
                        'Created reusable UI React components with Tailwind, using Storybook and Chromatic for regression testing',
                        'Implemented interactive graph data visualizations with D3.js to represent complex workflows and actions',
                        'Built backend services in Node.js for Azure AD authentication and Postgres database connection',
                        'Built automation tools for generating API endpoints for Azure Functions based on routines exported from Postgres database',
                        'Set up automatic deployment on Azure',
                    ]}
                />
                <ExperienceBlock
                    title="Lead Frontend Engineer"
                    date="February 2020"
                    description="Technical lead for frontend, extending architecture and functionality of the internal portal"
                    company="Iglu"
                    link="https://iglu.net"
                    items={[
                        'Developed frontend of internal portal for 250 employees in React',
                        'Mentored juniors in web development on weekly basis',
                        'Implemented invoicing and reporting, linking to Xero accounting software',
                    ]}
                />
                <ExperienceBlock
                    title="Senior Full Stack Engineer"
                    date="June 2019"
                    description="Modernized and optimized a large production web application, improving performance, structure, and SEO"
                    company="SICCODE"
                    link="https://siccode.com"
                    items={[
                        'Expanded and restructured existing PHP web application',
                        'Optimized code for load speeds, targeting page loads under 100ms',
                        "Implemented extensive SEO improvements using microdata and JSON-LD, based on Schema.org's vocabulary",
                    ]}
                />
                <ExperienceBlock
                    title="Digital Lead"
                    date="October 2014"
                    description="Technical lead for frontend and backend teams, acting as the bridge between development, project management, and clients"
                    company="Just"
                    link="https://just.agency/en"
                    items={[
                        'Responsible for the architecture, development, and quality control of all deliverables',
                        'Acted as bridge between project management and development team by handling all technical questions by project managers, clients and other agencies',
                        'Conducted technical interviews, performance reviews, and advised management on staffing decisions',
                        'Mentored interns, junior and senior developers in all in-house used programming languages, frameworks and tools',
                        'Consulted clients on processes and architecture based on project requirements',
                        'Developed frontend of websites and applications with React',
                        'Built real-time interactive multi-user applications using WebSockets',
                        'Built 2D and 3D animations in JavaScript for websites',
                        'Built automation tools with JavaScript (Node.js) and PHP for faster development and delivery of advertising banners, increasing output from 30 to over 200 per day',
                        'Developed internal application with automated repeating tasks to reduce workload for HR and provide more transparency to 30 employees',
                        'Developed standardized cookie bar with implementation documentation for use by government agencies',
                        'Created motion graphics in After Effects for advertising videos, making use of ExtendScript to generate variations',
                    ]}
                />
                <ExperienceBlock
                    title="Full Stack Developer"
                    date="September 2011"
                    description="Developed numerous frontend and backend web applications for a variety of clients"
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
                    description="Built Flash-based websites and interactive components from design to production"
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
                    description="Built and sold reusable Flash components via the Envato marketplace"
                    company="Freelance"
                    items={[
                        'Designed and built reusable components to be sold through Envato (formerly FlashDen) marketplace',
                        'Implemented components in client projects and provided support',
                    ]}
                />
            </Container>
            <SectionLinks>
                <Link href="/Emre-Koc-Resume.pdf">Download Resume (PDF)</Link>
            </SectionLinks>
        </Section>
    );
}
