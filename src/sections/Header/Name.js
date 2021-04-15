import { createUseStyles } from 'react-jss';
import { Trans } from '../../components';

const useStyles = createUseStyles({
    svg: {
        fontSize: '1.5em',
        height: '2em',
        overflow: 'visible',
        width: '8em',
    },
    text: {
        fill: 'none',
        fontWeight: 100,
        letterSpacing: '0.125em',
        lineHeight: 1,
        opacity: 0,
        stroke: 'var(--color-black)',
        strokeDasharray: '0, 100',
        strokeWidth: '1px',
        textTransform: 'uppercase',
        transition: 'font-size 0.5s var(--ease), stroke 0.5s var(--ease), transform 0.5s var(--ease), stroke-dasharray 1s var(--ease), opacity 0s 1s',
        '&:first-child': {
            dominantBaseline: 'hanging',
            transform: 'translateX(-0.125rem)',
        },
        '&:last-child': {
            dominantBaseline: 'alphabetic',
            fontSize: '0.5em',
            strokeWidth: '2px',
        },
        '$svg.active &': {
            strokeDasharray: '100, 0',
            opacity: 1,
            transition: 'font-size 0.5s var(--ease), stroke 0.5s var(--ease), stroke-dasharray 1s var(--ease), transform 0.5s var(--ease)',
        },
    },
});

export default function Name() {

    const classes = useStyles();

    return <Trans className={classes.svg} fade={false} stall={1} tag="svg">
        <text className={classes.text} y="14%">Emre Koc</text>
        <text className={classes.text} y="83%">Full Stack Developer</text>
    </Trans>;

}