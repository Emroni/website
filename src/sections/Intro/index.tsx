import { createUseStyles } from 'react-jss';
import { Resume, Section, Trans } from '../../components';
import Block from './Block';

const useStyles = createUseStyles((theme: any) => ({
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

export default function Intro() {

    const classes = useStyles();

    return <Section background title="Hi">
        <Trans tag="p">
            I’m an expert Full Stack Developer with 15 years of experience in web technologies. With extensive knowledge of JavaScript and PHP, my specialty lies in React and Symfony frameworks. I have a consistent record of rapidly delivering high quality code and valuable consultancy on processes and structure, as well as the ability to manage teams of developers. My work is both creative and methodical, showcasing my passion for programming.
        </Trans>
        <Trans tag="p">
            I build custom frontend and backend solutions, automation tools, motion design and animations. My experience in these fields have also allowed me to mentor dozens of developers with any skill level between intern and senior.
        </Trans>
        <Trans className={classes.blocks} fade={false} stall={0.5}>
            <Block title="Know" items="JavaScript,PHP,HTML/CSS"/>
            <Block title="Love" items="React,Three.js,D3.js"/>
            <Block title="Teach" items="Development,Automation,Animation"/>
        </Trans>
        <Resume/>
    </Section>;

}