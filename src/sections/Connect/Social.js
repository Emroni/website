import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles } from 'react-jss';
import { Trans } from '../../components';

const useStyles = createUseStyles(theme => ({
    li: {
        display: 'inline-block',
        width: '50%',
        [theme.media.sm]: {
            width: '(1/3) * 100%',
        },
        [theme.media.md]: {
            width: '25%',
        },
    },
    a: {
        textDecoration: 'none',
        display: 'inline-block',
        position: 'relative',
        margin: '0.125em',
        '&, &:active, &:focus, &:hover, &:visited': {
            color: 'var(--color-black)',
        },
        '& span': {
            display: 'inline-block',
            padding: '0.5em',
            paddingLeft: '2em',
        },
        '& svg': {
            position: 'absolute',
            left: '1em',
            top: '50%',
            transform: 'translate(-50%, -50%)',
        },
        [theme.media.sm]: {
            '& span': {
                padding: '0.75em',
                paddingLeft: '2.25em',
            },
            '& svg': {
                left: '1.125em',
            },
        },
        [theme.media.md]: {
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
                <FontAwesomeIcon icon={icon}/>
                {title}
            </span>
        </a>
    </Trans>;

}