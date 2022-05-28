import { Trans } from '@/components';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrap: {
        '&:before, &:after': {
            content: '""',
            backgroundColor: 'var(--color-blue-500)',
            top: '0.625em',
            height: 'calc(100% - 0.625em)',
            width: '1px',
            position: 'absolute',
            transition: 'height 0.25s',
        },
        '&:not(.active):before, &:not(.active):after': {
            height: '0 !important',
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
        '&:before, span:last-child:after': {
            content: '""',
            backgroundColor: 'var(--color-blue-500)',
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
        '@media (min-width: 640)': {
            '&:before': {
                width: '0.75rem',
            },
        },
        '@media (min-width: 768px)': {
            '&:before': {
                width: '1rem',
            },
        },
    },
    list: {
        '&:after': {
            content: '""',
            backgroundColor: 'var(--color-blue-500)',
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
        '&:before': {
            content: '""',
            backgroundColor: 'var(--color-blue-500)',
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
            transition: 'opacity 0.25s var(--ease), transform 0.25s var(--ease)',
            '.wrap:not(.active) &': {
                opacity: 0,
                transform: 'translateX(-0.5em)',
            },
        },
        ...generateDelays(),
    },
});

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

    return <Trans className={`relative wrap ${classes.wrap}`} fade={false} stall={0.1}>
        <h3 className={`flex leading-none pl-4 relative text-xl tracking-widest uppercase sm:pl-5 md:pl-6 ${classes.title}`}>
            <span>
                {title}
            </span>
            <span className="inline-block relative" />
        </h3>
        <ul className={`p-2 relative md:p-3 ${classes.list}`}>
            {items.split(',').map((item, key) =>
                <li className={`inline-block m-1 px-2 py-0.5 relative ${classes.item}`} key={key}>
                    <span className="inline-block">
                        {item}
                    </span>
                </li>
            )}
        </ul>
    </Trans>;

}