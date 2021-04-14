import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { useTransition } from '../providers';

export default function Trans({children, className, fade = true, stall = 0, tag = 'div', ...props}) {

    const [active, setActive] = useState(false);
    const [ready, setReady] = useState(false);
    const ref = useRef();
    const transition = useTransition();

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

    const classNames = classnames(className, 'trans', {
        active,
        fade,
    });

    const Tag = tag;

    return <Tag className={classNames} ref={ref} {...props}>{children}</Tag>;

}