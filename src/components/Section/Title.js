import { createUseStyles } from 'react-jss';
import { Trans } from '../index';

// TODO: Replace chevrons with SVG icons
const useStyles = createUseStyles({
    title: {
        display: 'inline-block',
        marginBottom: 0,
        position: 'relative',
        '& > span': {
            display: 'inline-block',
            overflow: 'hidden',
            '& > span': {
                display: 'inline-block',
                transition: 'opacity 0.5s var(--ease) 0.25s, transform 0.5s var(--ease) 0.25s',
            },
        },
        '&:before, &:after': {
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            transition: 'opacity 0.5s var(--ease), transform 0.5s var(--ease)',
        },
        '&:before': {
            backgroundImage: 'url(/images/code-before-black.png)',
            height: '0.8em',
            left: '-0.75em',
            width: '0.4375em',
            '.background &': {
                backgroundImage: 'url(/images/code-before-white.png)',
            },
        },
        '&:after': {
            backgroundImage: 'url(/images/code-after-black.png)',
            height: '1.125em',
            right: '-1.125em',
            width: '0.875em',
            '.background &': {
                backgroundImage: 'url(/images/code-after-white.png)',
            },
        },
        '&:not(.active)': {
            '& > span > span': {
                opacity: 0,
                transform: 'translateY(-50%)',
            },
            '&:before': {
                opacity: 0,
                transform: 'translate(200%, -50%)',
            },
            '&:after': {
                opacity: 0,
                transform: 'translate(-200%, -50%)',
            },
        },
    },
});

export default function Section({children}) {

    const classes = useStyles();

    return <Trans className={classes.title} fade={false} stall={0.5} tag="h2">
            <span>
                <span>{children}</span>
            </span>
    </Trans>;

}