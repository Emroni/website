import { Block, Section, Trans } from '@/components';
import { createUseStyles } from 'react-jss';

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

export default function Knowledge() {

    const classes = useStyles();

    return <Section heading="Technical Knowledge">
        <Trans className={classes.blocks} fade={false} stall={0.5}>
            <Block title="Know" items="JavaScript,PHP,HTML/CSS" />
            <Block title="Love" items="React,Three.js,D3.js" />
            <Block title="Teach" items="Development,Automation,Animation" />
        </Trans>
    </Section>;

}