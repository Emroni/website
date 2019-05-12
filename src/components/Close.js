import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

export default function Close({to, active}) {

    const className = classnames('close', {
        active,
    });

    const arrow = <path d="M6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 13.41 12z"/>;

    return <Link className={className} to={to}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <defs>
                <clipPath id="clip">
                    <rect x="0" y="0" width="12" height="24" />
                </clipPath>
            </defs>

            <g clipPath="url(#clip)">
                {arrow}
                {arrow}
            </g>
            <g clipPath="url(#clip)">
                {arrow}
                {arrow}
            </g>
        </svg>
    </Link>;

}