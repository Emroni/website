import { Trans } from '@/components';
import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    list: {
        lineHeight: 1.25,
        marginLeft: '-1em',
        paddingLeft: '1em',
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
            marginBottom: '0.5em',
            transition: 'opacity 0.5s var(--ease), transform 0.5s var(--ease)',
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

export default function List({
                                 children,
                                 className = '',
                                 tag = 'ul',
                             }) {

    const classes = useStyles();
    const listClasses = clsx(className, classes.list);

    return <Trans className={listClasses} fade={false} stall={0.25} tag={tag}>
        {children}
    </Trans>;

}