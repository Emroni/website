import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    link: {
        '&:before, &:after, & > span:after': {
            content: '""',
            backgroundColor: 'var(--color-black)',
            position: 'absolute',
        },
        '.background &': {
            '&, &:active, &:focus, &:hover, &:visited': {
                color: 'var(--color-white)',
            },
            '&:before, &:after, & > span:after': {
                backgroundColor: 'var(--color-white)',
            },
        },
        '&:before': {
            right: 0,
            bottom: 0,
            width: '100%',
            height: '1px',
            transition: '0.25s var(--ease-out) 0.25s',
        },
        '@media(hover)': {
            '&:after': {
                right: '-0.1875em',
                width: '1px',
                animation: '$link-out 0.5s var(--ease-in) 1 forwards',
            },
            '& > span:after': {
                top: '0.125em',
                right: '-0.1875em',
                height: '1px',
                width: 0,
                transition: 'width 0.1875s var(--ease-in)',
            },
            '&:active, &:focus, &:hover': {
                '&:before': {
                    right: '-0.1875em',
                    width: 0,
                    transition: '0.25s var(--ease-in)',
                },
                '&:after': {
                    animationName: '$link-in',
                    animationTimingFunction: 'var(--ease-out)',
                },
                '& > span:after': {
                    width: '0.5em',
                    transition: 'width 0.1875s var(--ease-out) 0.3125s',
                },
            },
        },
    },
    '@keyframes link-in': {
        '0%, 50%': {
            top: '100%',
            height: 0,
        },
        '75%': {
            top: '0.125em',
            height: 'calc(100% - 0.125em)',
        },
        '100%': {
            top: '0.125em',
            height: '0.5em',
        },
    },
    '@keyframes link-out': {
        '0%': {
            top: '0.125em',
            height: '0.5em',
        },
        '25%': {
            top: '0.125em',
            height: 'calc(100% - 0.125em)',
        },
        '50%, 100%': {
            top: '100%',
            height: 0,
        },
    },
});

export default function Link({ children, href }: LinkProps) {

    const classes = useStyles();

    return <a href={href} className={`inline-block relative ${classes.link}`} target="_blank" rel="noopener noreferrer">
        <span className="inline-block relative">
            {children}
        </span>
    </a>;

}