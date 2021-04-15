import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
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
            '.wrap:not(.active) &': {
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
            '.wrap:not(.active) &': {
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
}));

export default function Title({children}) {

    const classes = useStyles();

    return <h3 className={classes.title}>
                <span>{children}</span>
                <span/>
            </h3>;

}