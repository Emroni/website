import { createUseStyles } from 'react-jss';
import { List, Section, Trans } from '../../components';
import Block from './Block';

const useStyles = createUseStyles(theme => ({
    blocks: {
        margin: '2em -1em',
        [theme.media.sm]: {
            display: 'flex',
            margin: '2em -1.5em',
        },
        [theme.media.md]: {
            margin: '2em -2em',
        },
    },
}));

export default function Knowledge() {

    const classes = useStyles();

    return <Section background title="Technical Knowledge">
        <Trans tag="p">
            I mostly work with React (JavaScript, frontend) and Symfony (PHP, backend) frameworks. Aside from working for clients, I love to experiment with 2D/3D animations and mentoring junior developers.
        </Trans>
        <Trans className={classes.blocks} fade={false} stall={0.5}>
            <Block title="Know" items="JavaScript,PHP,HTML/CSS"/>
            <Block title="Love" items="React,Three.js,D3.js"/>
            <Block title="Teach" items="Development,Automation,Animation"/>
        </Trans>
        <List>
            <li>
                <strong>Extensive knowledge</strong> of JavaScript, PHP, HTML, CSS, as well as React and Symfony frameworks, and Restful and GraphQL APIs
            </li>
            <li>
                <strong>Proficient</strong> in Three.js, PixiJS and D3.js for 2D/3D animations, motion design and visualization
            </li>
            <li>
                <strong>Working knowledge</strong> of Sketch, Illustrator, Photoshop and After Effects
            </li>
            <li>
                <strong>Strong sense</strong> for mathematics and automation
            </li>
        </List>
    </Section>;

}