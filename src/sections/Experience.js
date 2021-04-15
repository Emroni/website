import { createUseStyles } from 'react-jss';
import { Section, Trans } from '../components';

const useStyles = createUseStyles({
    title: {
        color: 'var(--color-blue)',
        fontWeight: 400,
        marginBottom: 0,
        transition: 'opacity 0.5s var(--ease), transform 0.5s var(--ease)',
        '&:not(.active)': {
            opacity: 0,
            transform: 'translateX(-0.5em)',
        },
    },
    segment: {
        marginTop: '1em',
        paddingLeft: '1em',
        position: 'relative',
        '&:before': {
            backgroundColor: 'var(--color-black)',
            content: '""',
            height: 0,
            left: 0,
            position: 'absolute',
            top: 0,
            transition: 'height 0.5s var(--ease)',
            width: '1px',
        },
        '&.active:before': {
            height: '100%',
        },
    },
    subtitle: {
        marginBottom: '0.25em',
        transition: 'opacity 0.5s var(--ease), transform 0.5s var(--ease)',
        '$segment:not(.active) &': {
            opacity: 0,
            transform: 'translateX(-0.5em)',
        },
    },
    list: {
        lineHeight: 1.5,
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        '& li': {
            ...generateListItemDelays(10),
            transition: 'opacity 0.5s var(--ease), transform 0.5s var(--ease)',
            '$segment:not(.active) &': {
                opacity: 0,
                transform: 'translateX(-0.5em)',
            },
        },
    },
});

function generateListItemDelays(count) {
    const children = {};
    for (let i = 1; i <= count; i++) {
        children[`&:nth-child(${i})`] = {
            transitionDelay: `${0.05 * i}s`,
        };
    }
    return children;
}

export default function Experience() {

    const classes = useStyles();

    return <Section title="Work Experience">
        <Trans className={classes.title} fade={false} tag="h3">2018 - Present | Freelancer</Trans>
        <Trans className={classes.segment} fade={false} stall={0.25}>
            <ul className={classes.list}>
                <li>Developed frontend of public websites and internal portals in React, making use of frameworks like Material-UI, Next.js and Bootstrap</li>
                <li>Developed backend systems in PHP with Symfony, Laravel and Zend frameworks, using Twig and Blade templating engines</li>
                <li>Built custom content management systems for managing data in SQL databases Expanded, restructured and implemented speed improvents in existing applications</li>
                <li>Built automation tools for generating APIs for Azure Functions based on routines export from SQL database</li>
                <li>Implemented extensive SEO improvements using microdata and JSON-LD, based on Schema.org's vocabulary</li>
                <li>Designed mockups and wireframes in Sketch and Illustrator</li>
                <li>Mentored juniors in React and development in general on weekly basis</li>
                <li>Hosted monthly developer meetups, giving talks about a career in web development</li>
            </ul>
        </Trans>
        <Trans className={classes.title} fade={false} tag="h3">2009 - 2018 | Full-time @ Just</Trans>
        <Trans className={classes.segment} fade={false} stall={0.25}>
            <h4 className={classes.subtitle}>2014 | Digital Lead</h4>
            <ul className={classes.list}>
                <li>Led department of frontend and backend development, responsible for quality control of all deliverables</li>
                <li>Acted as bridge between project management and development team by handling all technical questions by project mangers, clients and other agencies</li>
                <li>Mentored interns, junior and senior developers in all in-house used programming languages, frameworks and tools</li>
                <li>Consulted clients on processes and architecure based on project requirements Developed frontend of websites and applications with React</li>
                <li>Built automation tools with JavaScript (Node) and PHP for significantly faster development and delivery of advertising banners</li>
                <li>Built real-time interactive multi-user applications using WebSockets Built 2D/3D animations in JavaScript for websites</li>
                <li>Developed an internal application with automated repeating tasks, significantly reducing workload for HR, while providing more transparency to employees</li>
                <li>Developed a standardized cookie bar with implementation documentation for use by government agencies</li>
                <li>Created motion graphics in After Effects for advertising videos, making use of ExtendScript to generate variations</li>
            </ul>
        </Trans>
        <Trans className={classes.segment} fade={false} stall={0.25}>
            <h4 className={classes.subtitle}>2011 | Full Stack Developer</h4>
            <ul className={classes.list}>
                <li>Led small teams of frontend and backend developers Mentored junior developers in JavaScript and Flash</li>
                <li>Developed frontend of websites with JavaScript, HTML and CSS from designs in Sketch and Illustrator</li>
                <li>Developed backend systems in PHP for websites and internal applications, using the Symfony, Laravel and CodeIgniter frameworks, with Twig and Blade templating engines</li>
                <li>Built motion graphics for videos and animations for websites in Flash</li>
            </ul>
        </Trans>
        <Trans className={classes.segment} fade={false} stall={0.25}>
            <h4 className={classes.subtitle}>2009 | Flash Developer</h4>
            <ul className={classes.list}>
                <li>Built and implemented components and full websites in Flash from designs in Photoshop</li>
            </ul>
        </Trans>
    </Section>;

}