import React from 'react';
import Trans from 'components/Trans';
import Video from 'components/Video';
import Link from '../../components/Link';

export default function Item({title, type, design, client, link, background, color, video, tags, description}) {

    const icon = type === 'video' ? 'play-circle' : 'window-maximize';

    const linkIsVimeo = link && link.includes('vimeo');
    const linkLabel = link && (linkIsVimeo ? 'Vimeo' : link.replace(/https?:\/\//i, ''));
    const linkPrefix = linkIsVimeo ? 'Watch on ' : 'Visit ';

    return <li>
        <div className="container">
            <Trans tag="h2" className="icon">
                <i className={`far fa-${icon}`}/>
                {title}
            </Trans>
            <Video slug={video} type={type} background={background} color={color} href={link}/>
            <Trans className="work-info">
                <Trans tag="p" className="work-summary">
                    {design &&
                    <span>Designed by {design}&nbsp;</span>}
                    {client &&
                    <span>for {client}</span>}
                    {link &&
                    <React.Fragment>
                        <br/>
                        <span>
                            {linkPrefix}
                            <Link href={link}>{linkLabel}</Link>
                        </span>
                    </React.Fragment>}
                </Trans>
                <Trans tag="ul" className="work-tags">
                    {tags.map(tag =>
                        <li key={tag}>
                            <span>{tag}</span>
                        </li>)}
                </Trans>
            </Trans>
            {description.map((p, key) =>
                <Trans tag="p" key={key}>{p}</Trans>)}
        </div>
    </li>;

}