import { createUseStyles } from 'react-jss';
import { Trans } from '../../components';

const useStyles = createUseStyles({
    h1: {
        fontSize: '1em',
        margin: 0,
    },
    svg: {
        display: 'block',
        height: '1.3875em',
        width: '7em',
    },
    text: {
        textTransform: 'uppercase',
        '&:first-child': {
            fontWeight: 100,
            letterSpacing: '0.1875em',
        },
        '&:last-child': {
            fontWeight: 600,
            letterSpacing: '0.1875em',
            fontSize: '0.375em',
        },
    },
    clip: {
        ...generateDelays(),
        transition: 'r 1s var(--ease-out)',
        '$svg:not(.active) &': {
            r: 0,
        },
    },
});

function generateDelays() {
    const children = {};
    for (let i = 1; i <= 10; i++) {
        children[`&:nth-child(${i})`] = {
            transitionDelay: `${0.05 * (i - 1)}s`,
        };
    }
    return children;
}

export default function Name() {

    const classes = useStyles();

    const topClip = new Array(10)
        .fill(0)
        .map((_item, index) => ({
            x: (9 * index) + '%',
            y: (40 * (index % 2)) + '%',
        }));

    const bottomClip = new Array(10)
        .fill(0)
        .map((_item, index) => ({
            x: (9 * index) + '%',
            y: (10 * (index % 2) + 80) + '%',
        }));

    return <h1 className={classes.h1}>
        <Trans className={classes.svg} fade={false} stall={1} tag="svg">
            <defs>
                <clipPath id="top-clip">
                    {topClip.map((item, index) =>
                        <circle className={classes.clip} cx={item.x} cy={item.y} key={index} r="13%"/>)}
                 </clipPath>
                <clipPath id="bottom-clip">
                    {bottomClip.map((item, index) =>
                        <circle className={classes.clip} cx={item.x} cy={item.y} key={index} r="8%"/>)}
                 </clipPath>
            </defs>
            <g>
                <text className={classes.text} clipPath="url(#top-clip)" x="-1%" y="55%">Emre Koc</text>
                <text className={classes.text} clipPath="url(#bottom-clip)" y="95%">Full Stack Developer</text>
            </g>
        </Trans>
    </h1>;

}