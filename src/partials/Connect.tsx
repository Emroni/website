import { Button, Section, Trans } from '@/components';
import { faCodepen, faGithub, faLinkedinIn, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const channels = [
    {
        icon: faLinkedinIn,
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/emroni',
    },
    {
        icon: faStackOverflow,
        label: 'Stack Overflow',
        url: 'https://stackoverflow.com/users/6933004',
    },
    {
        icon: faGithub,
        label: 'GitHub',
        url: 'https://github.com/Emroni',
    },
    {
        icon: faTwitter,
        label: 'Twitter',
        url: 'https://twitter.com/emroni',
    },
    {
        icon: faCodepen,
        label: 'CodePen',
        url: 'https://codepen.io/Emroni',
    },
    {
        icon: faEnvelope,
        label: 'Email',
        url: 'mailto:hi@emrekoc.io',
    },
];

export default function Connect() {

    return <Section heading="Connect">
        <Trans tag="p">
            For questions or inquiries, feel free to contact me through any of the channels below.
        </Trans>
        <Trans tag="ul" className="gap-2 grid grid-cols-2 -mx-2 my-4 sm:-mx-3 sm:my-6 md:gap-4 md:grid-cols-3 md:-mx-4 md:my-8">
            {channels.map((channel, index) => (
                <li key={index}>
                    <Button icon={channel.icon} url={channel.url}>
                        {channel.label}
                    </Button>
                </li>
            ))}
        </Trans>
    </Section>;

}