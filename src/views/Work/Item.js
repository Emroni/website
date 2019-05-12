import React from 'react';
import Trans from 'components/Trans';
import Video from 'components/Video';

export default function Item({title, type, link, background, color, video, summary, description}) {

    const icon = type === 'video' ? 'play-circle' : 'window-maximize';

    return <li>
        <div className="container">
            <Trans tag="h2" className="icon">
                <i className={`far fa-${icon}`}/>
                {title}
            </Trans>
            <Video slug={video} type={type} background={background} color={color} href={link}/>
            <Trans className="work-summary">{summary}</Trans>
            <Trans tag="p">{description}</Trans>
        </div>
    </li>;

}