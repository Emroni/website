import { Trans } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: any) => ({
    li: {
        display: 'inline-block',
        width: '50%',
        [theme.media.md]: {
            width: (100/3) + '%',
        },
    },
    a: {
        textDecoration: 'none',
        display: 'inline-block',
        position: 'relative',
        margin: '0.125em',
        whiteSpace: 'nowrap',
        '&, &:active, &:focus, &:hover, &:visited': {
            color: 'var(--color-black)',
        },
        '& span': {
            display: 'inline-block',
            padding: '0.5em',
            paddingLeft: '2em',
        },
        '& svg': {
            height: '16px',
            left: '1em',
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '16px',
        },
        [theme.media.sm]: {
            margin: '0.25em',
            '& span': {
                padding: '0.75em',
                paddingLeft: '2.25em',
            },
            '& svg': {
                left: '1.125em',
            },
        },
        [theme.media.md]: {
            margin: '0.375em',
        },
        [theme.media.lg]: {
            '& span': {
                padding: '1em',
                paddingLeft: '2.5em',
            },
            '& svg': {
                left: '1.25em',
            },
        },
        '@media (hover)': {
            '&:before, &:after, span:before, span:after': {
                backgroundColor: 'var(--color-black)',
                content: '""',
                position: 'absolute',
            },
            '&:before, &:after': {
                height: '1px',
                width: 0,
                transition: '0.25s var(--ease-in)',
            },
            '& span:before, & span:after': {
                height: 0,
                width: '1px',
                transition: '0.25s var(--ease-out) 0.25s',
            },
            '&:before': {
                right: 0,
                top: 0,
            },
            '&:after': {
                bottom: 0,
                left: 0,
            },
            '& span:before': {
                left: 0,
                top: 0,
            },
            '& span:after': {
                bottom: 0,
                right: 0,
            },
            '&:hover, &:focus': {
                '&:before, &:after': {
                    width: '100%',
                },
                '& span:before, & span:after': {
                    height: '100%',
                },
                '&:before': {
                    left: 0,
                    right: 'auto',
                },
                '&:after': {
                    left: 'auto',
                    right: 0,
                },
                '& span:before': {
                    bottom: 0,
                    top: 'auto',
                },
                '& span:after': {
                    bottom: 'auto',
                    top: 0,
                },
            },
        },
    },
}));

export default function Social({
                                   icon,
                                   title,
                                   url,
                               }) {

    const classes = useStyles();

    return <Trans className={classes.li}>
        <a className={classes.a} href={url} target="_blank" rel="noopener noreferrer">
            <span>
                <FontAwesomeIcon icon={icon} />
                {title}
            </span>
        </a>
    </Trans>;

}