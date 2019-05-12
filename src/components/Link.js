import React from 'react';

export default function Link({children, href}) {

    return <a href={href} className="link" target="_blank" rel="noopener noreferrer">
        <span>{children}</span>
    </a>;

}