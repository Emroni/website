import React from 'react';
import { createUseStyles } from 'react-jss';
import { Trans } from './index';
import classnames from 'classnames';

const useStyles = createUseStyles({
    list: props => ({
        lineHeight: 1.5,
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
            ...generateDelays(props.count),
            transition: 'opacity 0.5s var(--ease), transform 0.5s var(--ease)',
        },
        '&:not(.active) li': {
            opacity: 0,
            transform: 'translateX(-0.5em)',
        },
    }),
});

function generateDelays(count) {
    const children = {};
    for (let i = 1; i <= count; i++) {
        children[`&:nth-child(${i})`] = {
            transitionDelay: `${0.05 * i}s`,
        };
    }
    return children;
}

export default function List({
                                 children,
                                 className,
                                 tag = 'ul',
                             }) {

    const count = React.Children.count(children);
    const classes = useStyles({count});
    const listClasses = classnames(className, classes.list);

    return <Trans className={listClasses} fade={false} stall={0.25} tag={tag}>
        {children}
    </Trans>;

}