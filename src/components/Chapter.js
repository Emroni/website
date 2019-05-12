import React from 'react';
import * as classnames from 'classnames';
import H2 from './H2';
import Trans from './Trans';

export default function Chapter({children, title, background}) {

    const className = classnames('container', {
        background,
    });

    const slug = title.toLowerCase().replace(/\s/g, '-');

    return <Trans className={className} id={slug}>
        <H2>{title}</H2>
        {children}
    </Trans>;

}