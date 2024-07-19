import { Section, Trans } from 'components';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
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
});

export default function Education() {

    const classes = useStyles();

    return <Section background heading="Education">
        <Trans className={`-ml-4 pl-4 relative ${classes.container}`}>
            <span className="font-semibold text-blue-50">2010 - 2013 @ The Hague University of Applied Sciences</span>
            <h3 className="my-1 text-2xl">Communication and Multimedia Design</h3>
            <span className="font-light">Bachelor of Information and Communication Technology</span>
        </Trans>
        <Trans className={`-ml-4 mt-8 pl-4 relative ${classes.container}`}>
            <span className="font-semibold text-blue-50">2007 - 2009 @ Delft University of Technology</span>
            <h3 className="my-1 text-2xl">Mechanical Engineering</h3>
            <span className="font-light">Attended classes in mathematics and physics</span>
        </Trans>
    </Section>

}