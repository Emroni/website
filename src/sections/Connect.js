import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCodepen, faFacebookF, faGithub, faInstagram, faLinkedinIn, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Section, Social, Trans } from '../components';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
    socials: {
        margin: '1em -0.625em',
        listStyleType: 'none',
        padding: 0,
        [theme.media.sm]: {
            margin: '1.5em -0.875em',
        },
        [theme.media.md]: {
            margin: '2em -1em',
        },
    },
}));

export default function Connect() {

    const classes = useStyles();

    const socials = [
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

    return <Section title="Connect">
        <Trans tag="p">
            Looking for more? Connect with me through any of the channels below.
        </Trans>
        <Trans tag="ul" className={classes.socials}>
            {socials.map((social, index) =>
                <Social key={index} {...social}/>)}
        </Trans>
    </Section>;

}