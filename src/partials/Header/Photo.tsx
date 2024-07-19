import clsx from 'clsx';
import { Transition } from 'components';
import { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    svg: {},
    border: {
        strokeDasharray: '0, 157%',
        '$svg.active &': {
            opacity: 1,
            strokeDasharray: '157%, 0',
            transition: 'stroke-dasharray 0.5s var(--ease)',
        },
    },
    image: {
        transition: 'opacity 0.5s var(--ease) 0.5s, transform 0.5s var(--ease) 0.5s',
        '$svg:not(.active) + &, &.loading': {
            opacity: 0,
            transform: 'scale(0.95)',
        },
    },
});

export default function Photo() {

    const [loading, setLoading] = useState(true);
    const classes = useStyles();
    const src = '/assets/emre-koc.jpg';

    useEffect(() => {
        const image = new window.Image();
        image.onload = () => setLoading(false);
        image.src = src;
    }, [src]);

    const imageClasses = clsx(classes.image, {
        loading,
    });

    return <div className="h-14 mr-6 overflow-hidden relative rounded-full w-14 xs:h-20 xs:mr-8 xs:w-20 sm:h-24 sm:mr-12 sm:w-24 md:h-28 md:mr-14 md:w-28 lg:h-32 lg:mr-14 lg:w-32 xl:h-36 xl:mr-16 xl:w-36">
        <Transition className={`absolute fill-transparent h-full left-0 top-0 w-full z-10 ${classes.svg}`} fade={false} tag="svg">
            <circle className={`opacity-0 stroke-1.5 stroke-blue-500 xs:stroke-2 sm:stroke-3 xl:stroke-4 ${classes.border}`} cx="50%" cy="50%" r="50%" />
        </Transition>
        <img alt="Emre Koc" className={`absolute inset-0 ${imageClasses}`} src={loading ? '' : src} />
    </div>;

}