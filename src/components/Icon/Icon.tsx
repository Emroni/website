import {
    faCodepen,
    faGithub,
    faLinkedinIn,
    faStackOverflow,
    faTwitter,
    faUpwork,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const icons: IconMap = {
    codepen: faCodepen,
    envelope: faEnvelope,
    github: faGithub,
    linkedin: faLinkedinIn,
    stackoverflow: faStackOverflow,
    twitter: faTwitter,
    upwork: faUpwork,
};

export default function Icon({ name }: IconProps) {
    const icon = icons[name];

    return <FontAwesomeIcon icon={icon} />;
}
