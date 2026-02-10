'use client';
import ExperienceBlock from '../ExperienceBlock';
import ExperienceGroup from '../ExperienceGroup';
import Link from '../Link';
import Section from '../Section';
import Transition from '../Transition';
import { Container, Note } from './styled';

export default function ExperienceSection() {
    return (
        <Section title="Work Experience">
            <Container>
                {/* Krobar.ai */}
                <ExperienceBlock
                    title="Krobar.ai"
                    titleLink="https://krobar.ai/"
                    dateRange={['03/2025', '10/2025']}
                    description="Technical Lead for frontend and backend architecture and development of an AI-native SaaS platform. Continued the Kromatic team into a new entity to develop AI-powered products."
                >
                    <ExperienceGroup
                        title="Lead Full Stack Engineer"
                        highlights={[
                            'Led development of AI-powered modeling and forecasting application in React',
                            'Integrated OpenAI assistants to help users build models, interpret results, and generate reports',
                            'Architected and implemented backend services in Node.js for streaming AI interactions and data processing',
                            'Integrated sophisticated Monte Carlo simulation engine for accurate forecasting and scenario modeling',
                            'Accelerated development by making implementation-level design decisions while staying consistent with design guidelines',
                            'Collaborated closely with design, product, and client teams to align technical solutions with business needs',
                        ]}
                    />
                </ExperienceBlock>

                {/* Kromatic */}
                <ExperienceBlock
                    title="Kromatic"
                    titleLink="https://kromatic.com/"
                    dateRange={['06/2022', '03/2025']}
                    description="Technical Lead for small distributed frontend and backend teams, delivering multiple production React applications and a custom LMS platform. Started as a freelance Frontend Engineer and progressed to a full-time Technical Lead role."
                >
                    <ExperienceGroup
                        title="Lead Full Stack Engineer"
                        highlights={[
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
                </ExperienceBlock>

                {/* Freelance */}
                <ExperienceBlock
                    title="Freelance"
                    dateRange={['04/2018', '06/2022']}
                    description="Independent full stack contractor operating at senior and lead level for multiple clients in different countries and time zones, often in parallel. Led small frontend and backend development teams, owning architecture, implementation, and deployment of production applications."
                >
                    {/* Kromatic */}
                    <ExperienceGroup
                        title="Kromatic"
                        titleLink="https://krobar.ai/"
                        dateRange={['08/2021', '01/2022']}
                        highlights={[
                            // 'Freelance before joining full-time',
                            'Built a single-page application in React for modeling and comparing experiment variants',
                            'Developed a dynamic form and responsive UI using Material UI',
                            'Implemented variant comparison and result visualization with a bar chart',
                            'Added export functionality to save experiment results as PDF or text files',
                        ]}
                    />

                    {/* NodeRelate */}
                    <ExperienceGroup
                        title="NodeRelate"
                        dateRange={['06/2020', '04/2022']}
                        titleLink="https://noderelate.com"
                        highlights={[
                            'Led development of enterprise-level data governance platform in React and Node.js',
                            'Created reusable UI React components with Tailwind, using Storybook and Chromatic for regression testing',
                            'Implemented interactive graph data visualizations with D3.js to represent complex workflows and actions',
                            'Built backend services in Node.js for Azure AD authentication and Postgres database connection',
                            'Built automation tools for generating API endpoints for Azure Functions based on routines exported from Postgres database',
                            'Set up CI/CD and automated deployments on Azure',
                        ]}
                    />

                    {/* Iglu */}
                    <ExperienceGroup
                        title="Iglu"
                        titleLink="https://iglu.net"
                        dateRange={['12/2019', '02/2021']}
                        highlights={[
                            'Developed frontend of internal portal for 250 employees in React',
                            'Implemented invoicing and reporting, linking to Xero accounting software',
                            'Mentored juniors in web development on weekly basis',
                        ]}
                    />

                    {/* SICCODE */}
                    <ExperienceGroup
                        title="SICCODE.com"
                        titleLink="https://siccode.com"
                        dateRange={['05/2019', '06/2020']}
                        highlights={[
                            'Modernized and restructured a large production PHP web application',
                            'Optimized performance to achieve sub-100ms page load times',
                            'Implemented extensive SEO improvements using microdata and JSON-LD (Schema.org)',
                        ]}
                    />

                    <Transition component={Note}>
                        Other clients with multiple projects included <Link href="https://just.agency/en">JUST</Link>,{' '}
                        <Link href="https://www.marathonstudio.cz/english">Marathon Studio</Link>,{' '}
                        <Link href="https://watch4media.nl/">Watch4Media</Link>, and several additional short-term
                        engagements.
                    </Transition>
                </ExperienceBlock>

                {/* Just */}
                <ExperienceBlock
                    title="JUST"
                    titleLink="https://just.agency/en"
                    dateRange={['06/2009', '04/2018']}
                    description="Started as freelance Flash Developer and progressed into a full-time lead role for the digital products department, leading frontend and backend teams and serving as the bridge between development, project management, and clients."
                >
                    <ExperienceGroup
                        title="Digital Lead"
                        dateRange={['10/2014', '04/2018']}
                        highlights={[
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
                    <ExperienceGroup
                        title="Full Stack Developer"
                        dateRange={['09/2011', '10/2014']}
                        highlights={[
                            'Developed frontend of websites with JavaScript, HTML and CSS from designs in Sketch and Illustrator',
                            'Developed backend systems in PHP for websites and internal applications, using the Symfony, Laravel and CodeIgniter frameworks, with Twig and Blade templating engines',
                            'Built motion graphics for videos and animations for websites in Flash',
                            'Led small teams of frontend and backend developers',
                            'Mentored junior developers in JavaScript and Flash',
                        ]}
                    />
                    <ExperienceGroup
                        title="Flash Developer"
                        dateRange={['06/2009', '09/2011']}
                        highlights={[
                            'Built full websites in Flash from designs in Photoshop',
                            'Implemented small Flash components into HTML websites, like navigation bars and animations',
                        ]}
                    />
                </ExperienceBlock>

                {/* Freelance */}
                <ExperienceBlock
                    title="Freelance"
                    dateRange={['03/2008', '05/2010']}
                    description="Built and sold reusable Flash components via the Envato marketplace."
                >
                    <ExperienceGroup
                        title="Flash Developer"
                        highlights={[
                            'Designed and built reusable components to be sold through Envato (formerly FlashDen) marketplace',
                            'Implemented components in client projects and provided support',
                        ]}
                    />
                </ExperienceBlock>
            </Container>
        </Section>
    );
}
