import { useEffect, useState } from 'react';
import classnames from 'classnames';
import { createUseStyles } from 'react-jss';
import { Trans } from './index';

const useStyles = createUseStyles(theme => ({
    container: {
        border: '0.125em solid var(--color-blue)',
        borderRadius: '100%',
        marginRight: '1em',
        overflow: 'hidden',
        width: '3em',
    },
    content: {
        paddingBottom: '100%',
        position: 'relative',
    },
    image: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        transition: `opacity 0.5s ${theme.eases.inOut}`,
        '&.loading': {
            opacity: 0,
        },
    },
}));

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

    return <Trans className={classes.container} stall={1}>
        <div className={classes.content}>
            <img alt="Emre Koc" className={imageClasses} src={loading ? '' : src}/>
        </div>
    </Trans>;

}