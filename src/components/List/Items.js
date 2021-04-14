import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
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

export default function Items({items}) {

    const classes = useStyles();

    items = items.split(',');

    return <ul className={classes.list}>
        {items.map((title, key) =>
            <li className={classes.item} key={key}>
                <span>{title}</span>
            </li>)}
    </ul>;

}