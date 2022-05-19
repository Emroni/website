import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useTransition } from '@/providers';

const useStyles = createUseStyles({
    fade: {
        transition: 'opacity 0.5s var(--ease)',
        '&:not(.active)': {
            opacity: 0,
        },
    },
});

export default function Trans({ children, className, fade = true, stall = 0, tag = 'div', ...props }: TransProps) {

    const [active, setActive] = useState(false);
    const [ready, setReady] = useState(false);
    const classes = useStyles();
    const ref = useRef();
    const transition: any = useTransition();

    useEffect(() => {
        if (!ready) {
            setReady(true);
            transition.add(ref, stall, () => setActive(true));
        }
    }, [
        ready,
        stall,
        transition,
    ]);

    const classNames = clsx(className, {
        [classes.fade]: fade,
        active,
    });

    const Tag: any = tag;

    return <Tag className={classNames} ref={ref} {...props}>{children}</Tag>;

}