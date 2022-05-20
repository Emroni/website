import { Section, Trans } from '@/components';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        marginLeft: '-1em',
        paddingLeft: '1em',
        position: 'relative',
        '&:not(:last-child)': {
            marginBottom: '2em',
        },
        '&:before': {
            backgroundColor: 'var(--color-white)',
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
    title: {
        fontWeight: 400,
        fontSize: '1.25em',
        margin: '0.25em 0',
    },
    info: {
        fontSize: '1.125em',
    },
});

export default function Education() {

    const classes = useStyles();

    return <Section background heading="Education">
        <Trans className={classes.container}>
            <strong>2010 - 2013 @ The Hague University of Applied Sciences</strong>
            <h3 className={classes.title}>Communication and Multimedia Design</h3>
            <span className={classes.info}>Bachelor of Information and Communication Technology</span>
        </Trans>
        <Trans className={classes.container}>
            <strong>2007 - 2009 @ Delft University of Technology</strong>
            <h3 className={classes.title}>Mechanical Engineering</h3>
            <span className={classes.info}>Attended classes in mathematics and physics</span>
        </Trans>
    </Section>

}