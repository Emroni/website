'use client';
import { List, ResumeLink, Section, Transition } from '@/components';
import { Container, Heading } from './Experience.styled';

export default function Experience() {
    return (
        <Section title="Work Experience">
            <Container>
                <div>
                    <Transition component={Heading} fade={false}>
                        2018 - Present | Freelancer
                    </Transition>
                    <List
                        items={[
                            'Developed frontend of public websites and internal portals in React, making use of frameworks like Material-UI and Next.js',
                            'Developed backend systems in PHP with Symfony, Laravel and Zend frameworks, using Twig and Blade templating engines',
                            'Built custom content management systems for managing data in SQL databases',
                            'Expanded, restructured and implemented speed improvements in existing applications',
                            'Built automation tools for generating APIs for Azure Functions based on routines export from SQL database',
                            "Implemented extensive SEO improvements using microdata and JSON-LD, based on Schema.org's vocabulary",
                            'Designed mockups and wireframes in Sketch and Illustrator',
                            'Mentored juniors in React and development in general on weekly basis',
                            'Hosted monthly developer meetups, giving talks about a career in web development',
                        ]}
                    />
                </div>
                <div>
                    <Transition component={Heading} fade={false}>
                        2009 - 2018 | Full-time @ Just
                    </Transition>
                    <List
                        title="2014 | Digital Lead"
                        items={[
                            'Led department of frontend and backend development, responsible for quality control of all deliverables ',
                            'Acted as bridge between project management and development team by handling all technical questions by project mangers, clients and other agencies',
                            'Mentored interns, junior and senior developers in all in-house used programming languages, frameworks and tools',
                            'Consulted clients on processes and architecture based on project requirements',
                            'Developed frontend of websites and applications with React',
                            'Built real-time interactive multi-user applications using WebSockets',
                            'Built 2D/3D animations in JavaScript for websites',
                            'Built automation tools with JavaScript (Node) and PHP for significantly faster development and delivery of advertising banners',
                            ' Developed an internal application with automated repeating tasks, significantly reducing workload for HR, while providing more transparency to employees',
                            'Developed a standardized cookie bar with implementation documentation for use by government agencies',
                            'Created motion graphics in After Effects for advertising videos, making use of ExtendScript to generate variations',
                        ]}
                    />
                    <List
                        title="2011 | Full Stack Developer"
                        items={[
                            'Led small teams of frontend and backend developers',
                            'Mentored junior developers in JavaScript and Flash',
                            'Developed frontend of websites with JavaScript, HTML and CSS from designs in Sketch and Illustrator',
                            'Developed backend systems in PHP for websites and internal applications, using the Symfony, Laravel and CodeIgniter frameworks, with Twig and Blade templating engines',
                            'Built motion graphics for videos and animations for websites in Flash',
                        ]}
                    />
                    <List
                        title="2009 | Flash Developer"
                        items={[
                            'Built and implemented components and full websites in Flash from designs in Photoshop',
                        ]}
                    />
                </div>
            </Container>
            <ResumeLink />
        </Section>
    );
}
