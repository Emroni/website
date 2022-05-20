import { Trans } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: any) => ({
    li: {
        display: 'inline-block',
        width: '50%',
        [theme.media.md]: {
            width: (100 / 3) + '%',
        },
    },
    a: {
        textDecoration: 'none',
        display: 'inline-block',
        position: 'relative',
        margin: '0.125em',
        whiteSpace: 'nowrap',
        '& span': {
            display: 'inline-block',
        },
        [theme.media.sm]: {
            margin: '0.25em',
        },
        [theme.media.md]: {
            margin: '0.375em',
        },
        '@media (hover)': {
            '&:before, &:after, span:before, span:after': {
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
    text: {
        '&, &:active, &:focus, &:hover, &:visited': {
            color: 'var(--color-black)',
        },
        '& span': {
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
            },
        },
    },
    image: {
        '& span': {
            padding: '1.5em 3em',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
        },
        '@media (hover)': {
            '&:before, &:after, span:before, span:after': {
                backgroundColor: 'var(--color-white)',
            },
        },
    },
}));

export default function Button({ children, icon, image, url }: ButtonProps) {

    const classes = useStyles();

    const anchorClasses = clsx(classes.a, {
        [`${classes.image}`]: image,
        [`${classes.text}`]: children,
    });

    const contentStyles = image ? {
        backgroundImage: `url('${image}')`,
    } : undefined;

    return <Trans className={classes.li}>
        <a className={anchorClasses} href={url} target="_blank" rel="noopener noreferrer">
            <span style={contentStyles}>
                {!image && <>
                    <FontAwesomeIcon icon={icon} />
                    {children}
                </>}
            </span>
        </a>
    </Trans>;

}