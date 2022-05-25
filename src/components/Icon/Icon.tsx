import { faCodepen, faGithub, faLinkedinIn, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const faIcons = {
    codepen: faCodepen,
    envelope: faEnvelope,
    github: faGithub,
    linkedin: faLinkedinIn,
    stackoverflow: faStackOverflow,
    twitter: faTwitter,
};

export default function Icon({ className, name }: IconProps) {

    const faIcon: any = faIcons[name];

    if (faIcon) {
        return <FontAwesomeIcon className={className} icon={faIcon} />;
    }

    return <img alt={name} className={className} src={`/assets/icons/${name}.svg`} />;

}