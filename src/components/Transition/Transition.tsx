'use client';
import { useTransitions } from '@/contexts/Transitions/Transitions';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

export default function Transition({
    children,
    className,
    component,
    fade = true,
    stall = 0,
    ...props
}: TransitionProps) {
    const [active, setActive] = useState(false);
    const [ready, setReady] = useState(false);
    const ref = useRef(null);
    const transitions = useTransitions();

    useEffect(() => {
        if (!ready) {
            setReady(true);
            transitions.add(ref, stall, () => setActive(true));
        }
    }, [ready, stall, transitions]);

    const classNames = clsx(className, {
        active,
        fade,
    });

    const Component: React.ElementType = component || 'div';

    if (!ready) {
        return null;
    }

    return (
        <Component className={classNames} ref={ref} {...props}>
            {children}
        </Component>
    );
}
