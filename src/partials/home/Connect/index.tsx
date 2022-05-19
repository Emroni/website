import { Section, Trans } from '@/components';
import { faCodepen, faGithub, faLinkedinIn, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { createUseStyles } from 'react-jss';
import Social from './Social';

const useStyles = createUseStyles((theme: any) => ({
    socials: {
        margin: '1em -0.625em',
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
            icon: faLinkedinIn,
            title: 'LinkedIn',
            url: 'https://linkedin.com/in/emroni',
        },
        {
            icon: faStackOverflow,
            title: 'Stack Overflow',
            url: 'https://stackoverflow.com/users/6933004',
        },
        {
            icon: faGithub,
            title: 'GitHub',
            url: 'https://github.com/Emroni',
        },
        {
            icon: faTwitter,
            title: 'Twitter',
            url: 'https://twitter.com/emroni',
        },
        {
            icon: faCodepen,
            title: 'CodePen',
            url: 'https://codepen.io/Emroni',
        },
        {
            icon: faEnvelope,
            title: 'Email',
            url: 'mailto:hi@emrekoc.io',
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