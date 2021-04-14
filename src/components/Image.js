import { useEffect, useState } from 'react';
import classnames from 'classnames';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
    image: {
        transition: `opacity 0.5s ${theme.eases.inOut}`,
        '&.loading': {
            opacity: 0,
        },
    },
}));

export default function Image({ alt, src }) {

    const [loading, setLoading] = useState(true);
    const classes = useStyles();
    
    useEffect(() => {
        const image = new window.Image();
        image.onload = () => setLoading(false);
        image.src = src;
    }, [src]);

    const className = classnames(classes.image, {
        loading,
    });

    return <img alt={alt} className={className} src={loading ? '' : src}/>;

}