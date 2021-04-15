import { useEffect, useState } from 'react';
import classnames from 'classnames';
import { createUseStyles } from 'react-jss';
import { Trans } from '../../components';

const useStyles = createUseStyles({
    container: {
        borderRadius: '100%',
        height: '3em',
        marginRight: '1em',
        overflow: 'hidden',
        position: 'relative',
        width: '3em',
    },
    svg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
    },
    border: {
        fill: 'none',
        stroke: 'var(--color-blue)',
        strokeDasharray: '0, 225',
        strokeWidth: '0.25em',
        '$svg.active &': {
            strokeDasharray: '225, 0',
            transition: 'stroke-dasharray 0.5s var(--ease)',
        },
    },
    image: {
        height: '100%',
        left: 0,
        position: 'absolute',
        top: 0,
        transition: 'opacity 0.5s var(--ease) 0.5s, transform 0.5s var(--ease) 0.5s',
        width: '100%',
        '$svg:not(.active) + &, &.loading': {
            opacity: 0,
            transform: 'scale(0.95)',
        },
    },
});

export default function Photo() {

    const [loading, setLoading] = useState(true);
    const classes = useStyles();
    const src = '/images/emre-koc.png';

    useEffect(() => {
        const image = new window.Image();
        image.onload = () => setLoading(false);
        image.src = src;
    }, [src]);

    const imageClasses = classnames(classes.image, {
        loading,
    });

    return <div className={classes.container}>
        <Trans className={classes.svg} fade={false} tag="svg">
            <circle className={classes.border} cx="50%" cy="50%" r="50%"/>
        </Trans>
        <img alt="Emre Koc" className={imageClasses} src={loading ? '' : src}/>
    </div>;

}