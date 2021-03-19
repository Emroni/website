import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faCodepen, faStackOverflow, faTwitter, faLinkedinIn, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { Chapter, Trans } from '../components';

export default function Connect() {

    const links = [
        {
            icon: faGithub,
            title: 'GitHub',
            url: 'https://github.com/Emroni',
        },
        {
            icon: faCodepen,
            title: 'CodePen',
            url: 'https://codepen.io/Emroni',
        },
        {
            icon: faStackOverflow,
            title: 'Stack Overflow',
            url: 'https://stackoverflow.com/users/6933004',
        },
        {
            icon: faEnvelope,
            title: 'Email',
            url: `mailto:hi@${window.location.host}`,
        },
        {
            icon: faTwitter,
            title: 'Twitter',
            url: 'https://twitter.com/emroni',
        },
        {
            icon: faLinkedinIn,
            title: 'LinkedIn',
            url: 'https://linkedin.com/in/emroni',
        },
        {
            icon: faInstagram,
            title: 'Instagram',
            url: 'https://www.instagram.com/emronic/',
        },
        {
            icon: faFacebookF,
            title: 'Facebook',
            url: 'https://www.facebook.com/emroni',
        },
    ];

    return <Chapter title="Connect">
        <Trans tag="p">
            Looking for more? Connect with me through any of the channels below.
        </Trans>
        <Trans tag="ul" className="connect">
            {links.map((item, key) =>
                <li key={key}>
                    <Trans tag="a" href={item.url} target="_blank" rel="noopener noreferrer">
                        <span>
                            <FontAwesomeIcon icon={item.icon}/>
                            {item.title}
                        </span>
                    </Trans>
                </li>)}
        </Trans>
    </Chapter>;

}