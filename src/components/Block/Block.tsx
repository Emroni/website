import { Trans } from '@/components';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: any) => ({
    wrap: {
        margin: '1em 0',
    },
    container: {
        position: 'relative',
        '&:before, &:after': {
            content: '""',
            backgroundColor: 'var(--color-blue)',
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
            backgroundColor: 'var(--color-blue)',
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
    list: {
        position: 'relative',
        padding: '0.5rem',
        [theme.media.md]: {
            padding: '0.75rem',
        },
        '&:after': {
            content: '""',
            backgroundColor: 'var(--color-blue)',
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            height: '1px',
            transition: 'width 0.25s var(--ease-out) 0.3s',
            '.wrap:not(.active) &': {
                width: '0 !important',
            },
        },
    },
    item: {
        display: 'inline-block',
        position: 'relative',
        padding: '0.125em 0.5rem',
        margin: '0.25em',
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
            '.wrap:not(.active) &': {
                width: 0,
            },
        },
        '& span': {
            display: 'inline-block',
            transition: 'opacity 0.25s var(--ease), transform 0.25s var(--ease)',
            '.wrap:not(.active) &': {
                opacity: 0,
                transform: 'translateX(-0.5em)',
            },
        },
        ...generateDelays(),
    },
}));

function generateDelays() {
    const children = {};
    for (let i = 1; i <= 40; i++) {
        children[`&:nth-child(${i})`] = {
            '&:before': {
                transitionDelay: `${0.025 * i + 0.3}s`,
            },
            '& span': {
                transitionDelay: `${0.025 * i + 0.35}s`,
            },
        };
    }
    return children;
}

export default function Block({ items, title }: BlockProps) {

    const classes = useStyles();

    return <Trans className={`wrap ${classes.wrap}`} fade={false} stall={0.1}>
        <div className={classes.container}>
            <h3 className={classes.title}>
                <span>
                    {title}
                </span>
                <span />
            </h3>
            <ul className={classes.list}>
                {items.split(',').map((item, key) =>
                    <li className={classes.item} key={key}>
                        <span>{item}</span>
                    </li>
                )}
            </ul>
        </div>
    </Trans>;

}