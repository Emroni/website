'use client';
import { useTransitions } from '@/contexts/Transitions/Transitions';
import { useEffect, useRef, useState } from 'react';

// const classes = {
//     fade: {
//         transition: 'opacity 0.5s var(--ease)',
//         '&:not(.active)': {
//             opacity: 0,
//         },
//     },
// };

export default function Transition({
    children,
    className,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fade = true,
    stall = 0,
    tag = 'div',
    ...props
}: TransitionProps) {
    const [, /* active */ setActive] = useState(false);
    const [ready, setReady] = useState(false);
    // const classes = useStyles();
    const ref = useRef(null);
    const transitions = useTransitions();

    useEffect(() => {
        if (!ready) {
            setReady(true);
            transitions.add(ref, stall, () => setActive(true));
        }
    }, [ready, stall, transitions]);

    const classNames = className;
    // clsx(className, {
    //     [classes.fade]: fade,
    //     active,
    // });

    const Tag: React.ElementType = tag;

    return (
        <Tag className={classNames} ref={ref} {...props}>
            {children}
        </Tag>
    );
}
