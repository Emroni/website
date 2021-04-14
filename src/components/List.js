import { createUseStyles } from 'react-jss';
import { Trans } from './index';

const useStyles = createUseStyles(theme => ({
    wrap: {
        margin: '1em 0',
        [theme.media.sm]: {
            flex: 1,
            padding: '0 0.5em',
            margin: 0,
        },
    },
    container: {
        position: 'relative',
        '&:before, &:after': {
            content: '""',
            backgroundColor: 'var(--color-black)',
            top: '0.625em',
            height: 'calc(100% - 0.625em)',
            width: '1px',
            position: 'absolute',
            transition: 'height 0.25s',
            '$wrap:not(.active) &': {
                height: '0 !important',
            },
        },
        '&:before': {
            left: 0,
            transitionDelay: '0.05s',
            transitionTimingFunction: 'var(--ease-in)',
        },
        '&:after': {
            right: 0,
            transitionDelay: '0.3s',
            transitionTimingFunction: 'var(--ease-out)',
        },
    },
    title: {
        fontSize: '1.25rem',
        fontWeight: 400,
        letterSpacing: '0.125em',
        textTransform: 'uppercase',
        display: 'flex',
        position: 'relative',
        paddingLeft: '1rem',
        margin: 0,
        '&:before, span:last-child:after': {
            content: '""',
            backgroundColor: 'var(--color-black)',
            height: '1px',
            position: 'absolute',
            left: 0,
            top: '50%',
            transition: 'width 0.25s var(--ease-in)',
            '$wrap:not(.active) &': {
                width: '0 !important',
            },
        },
        '&:before': {
            width: '0.5rem',
        },
        '& span': {
            position: 'relative',
            display: 'inline-block',
            transition: 'opacity 0.25s var(--ease) 0.05s, transform 0.25s var(--ease) 0.05s',
            '&:last-child': {
                flex: 1,
                '&:after': {
                    width: '100%',
                },
            },
            '$wrap:not(.active) &': {
                opacity: 0,
                transform: 'translateX(-0.5em)',
            },
        },
        [theme.media.md]: {
            paddingLeft: '1.5rem',
            '&:before': {
                width: '1rem',
            },
        },
    },
    list: {
        position: 'relative',
        padding: '0.5rem',
        margin: 0,
        listStyleType: 'none',
        [theme.media.md]: {
            padding: '1rem',
        },
        '&:after': {
            content: '""',
            backgroundColor: 'var(--color-black)',
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            height: '1px',
            transition: 'width 0.25s var(--ease-out) 0.3s',
            '$wrap:not(.active) &': {
                width: '0 !important',
            },
        },
    },
    item: {
        position: 'relative',
        padding: '0.125em 0.5rem',
        marginBottom: '0.25em',
        '&:last-child': {
            marginBottom: 0,
        },
        '&:before': {
            content: '""',
            backgroundColor: 'var(--color-blue)',
            opacity: 0.05,
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            transition: 'width 0.25s var(--ease)',
            '$wrap:not(.active) &': {
                width: 0,
            },
        },
        '& span': {
            display: 'inline-block',
            transition: 'opacity 0.25s var(--ease), transform 0.25s var(--ease)',
            '$wrap:not(.active) &': {
                opacity: 0,
                transform: 'translateX(-0.5em)',
            },
        },
        '&:nth-child(1)': {
            '&:before': {
                transitionDelay: '0.325s',
            },
            '& span': {
                transitionDelay: '0.375s',
            },
        },
        '&:nth-child(2)': {
            '&:before': {
                transitionDelay: '0.35s',
            },
            '& span': {
                transitionDelay: '0.4s',
            },
        },
        '&:nth-child(3)': {
            '&:before': {
                transitionDelay: '0.375s',
            },
            '& span': {
                transitionDelay: '0.425s',
            },
        },
    },
}));

export default function List({
                                 title,
                                 items,
                             }) {

    const classes = useStyles();

    items = items.split(',');

    return <Trans className={classes.wrap} fade={false} stall={0.1}>
        <div className={classes.container}>
            <h3 className={classes.title}>
                <span>{title}</span>
                <span/>
            </h3>
            <ul className={classes.list}>
                {items.map((title, key) =>
                    <li className={classes.item} key={key}>
                        <span>{title}</span>
                    </li>)}
            </ul>
        </div>
    </Trans>;

}