import { Resume } from './types';

export const resume: Resume = {
    // Educations
    educations: [
        {
            field: 'Communication and Multimedia Design',
            institution: 'The Hague University of Applied Sciences',
            degree: 'Bachelor of Information and Communication Technology',
            startDate: '2010-09-01',
            endDate: '2013-11-01',
        },
        {
            field: 'Mechanical Engineering',
            institution: 'Delft University of Technology',
            startDate: '2007-09-01',
            endDate: '2009-07-01',
        },
    ],

    // Intro
    intro: [
        "I'm a Senior Software Engineer with nearly 20 years of experience creating web applications, including more than a decade leading teams as a Technical Lead. Specialized in TypeScript, React, and Node.js, I focus on building user-first, scalable, and maintainable digital products.",
        'I have a consistent record of rapidly delivering high-quality code and providing valuable guidance on processes and structure. I excel at communicating with both technical and non-technical teams, aligning engineering decisions with business goals to drive meaningful results. My work is both creative and methodical, showcasing my passion for programming.',
    ],

    // Jobs
    jobs: [
        {
            title: 'Head of Engineering',
            company: 'Krobar.ai',
            link: 'https://krobar.ai/',
            startDate: '2025-03-01',
            endDate: '2025-10-01',
            description:
                'Technical lead for frontend and backend architecture and development of an AI-native SaaS platform',
            items: [
                'Led development of AI-powered modeling and forecasting application in React',
                'Integrated OpenAI assistants to help users build models, interpret results, and generate reports',
                'Architected and implemented backend services in Node.js for streaming AI interactions and data processing',
                'Integrated sophisticated Monte Carlo simulation engine for accurate forecasting and scenario modeling',
                'Accelerated development by making implementation-level design decisions while staying consistent with design guidelines',
                'Collaborated closely with design, product, and client teams to align technical solutions with business needs',
            ],
        },
        {
            title: 'Head of Engineering',
            company: 'Kromatic',
            link: 'https://kromatic.com/',
            startDate: '2022-06-01',
            endDate: '2025-03-01',
            description:
                'Technical lead for distributed frontend and backend teams, delivering multiple production React applications and a custom LMS platform',
            items: [
                'Developed 6 interactive white-label business innovation training applications in React',
                'Led contracted development teams building an enterprise-level learning management system',
                'Conducted technical interviews, code reviews, and performance reviews for staffing decisions',
                'Standardized code style and architecture of contractor-built applications, improving maintainability and consistency across projects',
                'Architected content management system where database content could be extended and customized while preserving the original data',
                'Developed Monte Carlo simulation scripts in Node.js to calculate scenario-based predictions',
                'Packaged application deliverables in Docker, supporting both Heroku and complex client-specific on-premises deployments',
                'Implemented Playwright automated end-to-end tests, covering role-based access control',
            ],
        },
        {
            title: 'Lead Full Stack Engineer',
            company: 'NodeRelate',
            link: 'https://noderelate.com',
            startDate: '2020-06-01',
            endDate: '2022-04-01',
            description:
                'Technical lead for frontend and backend teams, overseeing architecture, implementation, and core system integrations',

            items: [
                'Developed frontend of enterprise-level data governance application in React',
                'Conducted technical interviews and code reviews, contributing to hiring decisions',
                'Created reusable UI React components with Tailwind, using Storybook and Chromatic for regression testing',
                'Implemented interactive graph data visualizations with D3.js to represent complex workflows and actions',
                'Built backend services in Node.js for Azure AD authentication and Postgres database connection',
                'Built automation tools for generating API endpoints for Azure Functions based on routines exported from Postgres database',
                'Set up automatic deployment on Azure',
            ],
        },
        {
            title: 'Lead Frontend Engineer',
            company: 'Iglu',
            link: 'https://iglu.net',
            startDate: '2020-02-01',
            endDate: '2021-03-01',
            description: 'Technical lead for frontend, extending architecture and functionality of the internal portal',
            items: [
                'Developed frontend of internal portal for 250 employees in React',
                'Mentored juniors in web development on weekly basis',
                'Implemented invoicing and reporting, linking to Xero accounting software',
            ],
        },
        {
            title: 'Senior Full Stack Engineer',
            company: 'SICCODE',
            link: 'https://siccode.com',
            startDate: '2019-06-01',
            endDate: '2020-01-01',
            description:
                'Modernized and optimized a large production web application, improving performance, structure, and SEO',

            items: [
                'Expanded and restructured existing PHP web application',
                'Optimized code for load speeds, targeting page loads under 100ms',
                "Implemented extensive SEO improvements using microdata and JSON-LD, based on Schema.org's vocabulary",
            ],
        },
        {
            title: 'Digital Lead',
            company: 'Just',
            link: 'https://just.agency/en',
            startDate: '2014-10-01',
            endDate: '2018-08-01',
            description:
                'Technical lead for frontend and backend teams, acting as the bridge between development, project management, and clients',
            items: [
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
            ],
        },
        {
            title: 'Full Stack Developer',
            company: 'Just',
            link: 'https://just.agency/en',
            startDate: '2011-09-01',
            endDate: '2014-10-01',
            description: 'Developed numerous frontend and backend web applications for a variety of clients',
            items: [
                'Developed frontend of websites with JavaScript, HTML and CSS from designs in Sketch and Illustrator',
                'Developed backend systems in PHP for websites and internal applications, using the Symfony, Laravel and CodeIgniter frameworks, with Twig and Blade templating engines',
                'Built motion graphics for videos and animations for websites in Flash',
                'Led small teams of frontend and backend developers',
                'Mentored junior developers in JavaScript and Flash',
            ],
        },
        {
            title: 'Flash Developer',
            company: 'Just',
            link: 'https://just.agency/en',
            startDate: '2009-06-01',
            endDate: '2011-09-01',
            description: 'Built Flash-based websites and interactive components from design to production',
            items: [
                'Built full websites in Flash from designs in Photoshop',
                'Implemented small Flash components into HTML websites, like navigation bars and animations',
            ],
        },
        {
            title: 'Flash Developer',
            company: 'Freelance',
            startDate: '2008-03-01',
            endDate: '2010-05-01',
            description: 'Built and sold reusable Flash components via the Envato marketplace',
            items: [
                'Designed and built reusable components to be sold through Envato (formerly FlashDen) marketplace',
                'Implemented components in client projects and provided support',
            ],
        },
    ],

    // Profile
    profile:
        'Senior Software Engineer with nearly 20 years of experience  creating web applications, including over a decade as a Technical Lead. Specialized in TypeScript, React, and Node.js, I build user-first, scalable, and maintainable digital products, consistently delivering high-quality code and guiding teams to align engineering decisions with business goals.',

    // Skills
    skills: [
        {
            category: 'Leadership',
            items: [
                'Technical Roadmapping',
                'System Architecture',
                'Agile Delivery',
                'Cross-Functional Collaboration',
                'Mentorship',
            ],
        },
        { category: 'Languages', items: ['TypeScript', 'JavaScript', 'PHP', 'HTML', 'CSS'] },
        {
            category: 'Frontend',
            items: ['React', 'Next.js', 'Material UI', 'Tailwind', 'Redux', 'PixiJS', 'Three.js', 'D3.js'],
        },
        { category: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'REST', 'GraphQL', 'WebSockets'] },
        { category: 'Database', items: ['PostgreSQL', 'MySQL', 'TypeORM', 'Sequelize', 'Prisma', 'Firebase'] },
        { category: 'Testing', items: ['Jest', 'React Testing Library', 'Playwright', 'Storybook', 'Chromatic'] },
        { category: 'Deployment', items: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Heroku', 'GitHub Actions'] },
        {
            category: 'Tools',
            items: ['GitHub Copilot', 'Claude', 'OpenAI', 'SonarCube', 'Sentry', 'Swagger', 'Figma', 'Mural'],
        },
    ],
};
