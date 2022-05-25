import { Trans } from '@/components';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    svg: {
        height: '1.3875em',
        width: '7em',
    },
    bottom: {
        fontSize: '0.375em',
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

    return <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        <Trans className={`block ${classes.svg}`} fade={false} stall={1} tag="svg">
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
                <text className="font-light tracking-huge uppercase" clipPath="url(#top-clip)" x="-1%" y="55%">Emre Koc</text>
                <text className={`font-semibold tracking-huge uppercase ${classes.bottom}`} clipPath="url(#bottom-clip)" y="95%">Full Stack Developer</text>
            </g>
        </Trans>
    </h1>;

}