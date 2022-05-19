import { createUseStyles } from 'react-jss';
import { Section, Trans } from '../components';

const useStyles = createUseStyles({
    container: {
        '&:not(:last-child)': {
            marginBottom: '2em',
        },
    },
    title: {
        color: 'var(--color-blue)',
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

    return <Section title="Education">
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