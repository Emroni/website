import { Trans } from '@/components';
import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    list: {
        lineHeight: 1.25,
        marginLeft: '-1em',
        paddingLeft: '0.75em',
        position: 'relative',
        '&:before': {
            backgroundColor: 'currentColor',
            content: '""',
            height: 0,
            left: 0,
            position: 'absolute',
            top: 0,
            transition: 'height 0.5s var(--ease)',
            width: '1px',
        },
        '&.active:before': {
            height: '100%',
        },
        '& li': {
            ...generateDelays(),
            padding: '0.25em',
            position: 'relative',
            transition: 'opacity 0.5s var(--ease), transform 0.5s var(--ease)',
            '&:not(.subtitle):before': {
                backgroundColor: 'var(--color-blue)',
                content: '""',
                height: '100%',
                left: 0,
                opacity: 0,
                position: 'absolute',
                top: 0,
                transition: 'opacity 0.25s var(--ease)',
                width: '100%',
                zIndex: -1,
            },
            '&:hover:before': {
                opacity: 0.05,
            },
        },
        '&:not(.active) li': {
            opacity: 0,
            transform: 'translateX(-0.5em)',
        },
    },
});

function generateDelays() {
    const children = {};
    for (let i = 1; i <= 15; i++) {
        children[`&:nth-child(${i})`] = {
            transitionDelay: `${0.05 * i}s`,
        };
    }
    return children;
}

export default function List({ children, className, tag = 'ul' }: ListProps) {

    const classes = useStyles();
    const listClasses = clsx(className, classes.list);

    return <Trans className={listClasses} fade={false} stall={0.25} tag={tag}>
        {children}
    </Trans>;

}