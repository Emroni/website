import * as classnames from 'classnames';
import { createUseStyles } from 'react-jss';
import { Trans } from './index';

// TODO: Replace title chevrons with SVG icons
const useStyles = createUseStyles(theme => ({
    background: {
        backgroundColor: 'var(--color-blue)',
        height: 0,
        left: '50%',
        position: 'absolute',
        top: '-1rem',
        transform: 'translate(-50%, -50%) skewY(-2deg)',
        transition: 'height 0.5s var(--ease), top 0.5s var(--ease)',
        width: '100vw',
        zIndex: -1,
        [theme.media.sm]: {
            top: '-1.5rem',
        },
        [theme.media.md]: {
            top: '-2rem',
        },
        [theme.media.lg]: {
            top: '-2.5rem',
        },
        [theme.media.xl]: {
            top: '-3rem',
        },
        '&.active': {
            height: '100%',
            top: '50%',
        },
    },
    container: {
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '3em 2em',
        position: 'relative',
        [theme.media.sm]: {
            maxWidth: theme.sizes.sm,
            padding: '4em',
        },
        [theme.media.md]: {
            maxWidth: theme.sizes.md,
            padding: '5em',
        },
        [theme.media.lg]: {
            maxWidth: theme.sizes.lg,
            padding: '6rem',
        },
        [theme.media.xl]: {
            padding: '7rem',
        },
        '&.background': {
            color: 'var(--color-white)',
        },
    },
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
            }
        },
        '&:after': {
            backgroundImage: 'url(/images/code-after-black.png)',
            height: '1.125em',
            right: '-1.125em',
            width: '0.875em',
            '.background &': {
                backgroundImage: 'url(/images/code-after-white.png)',
            }
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

}));

export default function Chapter({
                                    background,
                                    children,
                                    title,
                                }) {

    const classes = useStyles();

    const containerClasses = classnames(classes.container, {
        background,
    });

    const slug = title.toLowerCase()
        .replace(/\s/g, '-');

    return <div className={containerClasses} id={slug}>
        <Trans className={classes.title} fade={false} stall={0.5} tag="h2">
            <span>
                <span>{title}</span>
            </span>
        </Trans>
        {children}
        {background && (
            <Trans className={classes.background} fade={false}/>)}
    </div>;

}