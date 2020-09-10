import React from 'react';
import Trans from '../../components/Trans';

export default function Connect() {

    const links = [
        {
            icon: 'fab fa-stack-overflow',
            title: 'Stack Overflow',
            url: 'https://stackoverflow.com/users/6933004',
        },
        {
            icon: 'fab fa-github',
            title: 'GitHub',
            url: 'https://github.com/Emroni',
        },
        {
            icon: 'fab fa-codepen',
            title: 'CodePen',
            url: 'https://codepen.io/Emroni',
        },
        {
            icon: 'far fa-envelope',
            title: 'Email',
            url: 'mailto:hi@emrekoc.io',
        },
        {
            icon: 'fab fa-twitter',
            title: 'Twitter',
            url: 'https://twitter.com/emroni',
        },
        {
            icon: 'fab fa-linkedin-in',
            title: 'LinkedIn',
            url: 'https://linkedin.com/in/emroni',
        },
        {
            icon: 'fab fa-instagram',
            title: 'Instagram',
            url: 'https://www.instagram.com/emronic/',
        },
        {
            icon: 'fab fa-facebook-f',
            title: 'Facebook',
            url: 'https://www.facebook.com/emroni',
        },
    ];

    return <Trans tag="ul" className="connect">
        {links.map((item, key) =>
            <li key={key}>
                <Trans tag="a" href={item.url} target="_blank" rel="noopener noreferrer">
                    <span>
                        <i className={item.icon}/>
                        {item.title}
                    </span>
                </Trans>
            </li>)}
    </Trans>;

}