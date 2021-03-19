import { useEffect, useState } from 'react';
import classnames from 'classnames';

export default function Image({ alt, src }) {

    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const image = new window.Image();
        image.onload = () => {
            setLoading(false);
        };
        image.src = src;
    }, [src]);

    const className = classnames('image', {
        loading,
    });

    return <img alt={alt} className={className} src={loading ? '' : src}/>;

}