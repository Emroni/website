import { Trans } from '@/components';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    title: {
        display: 'inline-block',
        marginBottom: '1em',
        position: 'relative',
    },
    content: {
        display: 'inline-block',
        overflow: 'hidden',
        '& > span': {
            display: 'inline-block',
            transition: 'opacity 0.5s var(--ease) 0.25s, transform 0.5s var(--ease) 0.25s',
        },
        '$title:not(.active) & > span': {
            opacity: 0,
            transform: 'translateY(-50%)',
        },
    },
    svg: {
        position: 'absolute',
        top: 0,
        transition: 'opacity 0.5s var(--ease), transform 0.5s var(--ease)',
        '&:first-child': {
            left: '-16px',
        },
        '&:last-child': {
            right: '-25px',
        },
        '$title:not(.active) &:first-child': {
            opacity: 0,
            transform: 'translateX(20px)',
        },
        '$title:not(.active) &:last-child': {
            opacity: 0,
            transform: 'translateX(-20px)',
        },
    },
});

export default function SectionHeading({ children }: SectionHeadingProps) {

    const classes = useStyles();

    return <Trans className={classes.title} fade={false} stall={0.5} tag="h2">
        <svg className={classes.svg} width="11px" height="24px" viewBox="0 0 7 16">
            <polygon fill="currentColor" points="7 2.38923077 5.45 1 0 8 5.45 15 7 13.6107692 2.61 8" />
        </svg>
        <span className={classes.content}>
            <span>{children}</span>
        </span>
        <svg className={classes.svg} width="21px" height="24px" viewBox="0 0 14 16">
            <polygon fill="currentColor" points="14 2.38923077 12.45 1 7 8 12.45 15 14 13.6107692 9.61 8" transform="rotate(180) translate(-20, -16)" />
            <polygon fill="currentColor" points="0 15.5806452 1.63098592 16 6 0.419354839 4.36901408 0" />
        </svg>
    </Trans>;

}