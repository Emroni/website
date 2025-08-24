'use client';
import { useTransitions } from '@/contexts/Transitions';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { TransitionProps } from './types';

export default function Transition({
    children,
    className,
    component,
    fade = true,
    stall = 0,
    onActive,
    ...props
}: TransitionProps) {
    const [active, setActive] = useState(false);
    const [ready, setReady] = useState(false);
    const ref = useRef<HTMLElement>(null);
    const transitions = useTransitions();

    useEffect(() => {
        if (!ready) {
            setReady(true);

            transitions.add(ref, stall, () => {
                setActive(true);
                onActive?.();
            });
        }
    }, [ready, stall, transitions, onActive]);

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
