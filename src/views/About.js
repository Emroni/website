import { createUseStyles } from 'react-jss';
import { Chapter, Link, List, Trans } from '../components';

const useStyles = createUseStyles(theme => ({
    skills: {
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

export default function About() {

    const classes = useStyles();

    return <Chapter title="Full Stack Developer">
        <Trans tag="p">
            I build custom frontend and backend solutions, automation tools, motion design and animations. My experience in those fields have also allowed me to mentor dozens of developers with any skill level between intern and senior.
        </Trans>
        <Trans className={classes.skills} fade={false} stall={1}>
            <List title="Know" items="JavaScript,PHP,HTML/CSS"/>
            <List title="Love" items="React,Three.js,D3.js"/>
            <List title="Teach" items="Development,Animation,Automation"/>
        </Trans>
        <Trans tag="p">
            For more information, download my <Link href="/assets/Emre-Koc-Resume.pdf">resume</Link> or connect with me on <Link href="https://linkedin.com/in/emroni">LinkedIn</Link>.
        </Trans>
    </Chapter>;

}