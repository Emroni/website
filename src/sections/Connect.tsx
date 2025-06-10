import { Button, Section, Transition } from '@/components';

const channels = [
    {
        icon: 'envelope',
        label: 'Email',
        url: 'mailto:hi@emrekoc.io',
    },
    {
        icon: 'upwork',
        label: 'Upwork',
        url: 'https://www.upwork.com/freelancers/~01677c361fd4d5063c',
    },
    {
        icon: 'linkedin',
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/emroni',
    },
    {
        icon: 'github',
        label: 'GitHub',
        url: 'https://github.com/Emroni',
    },
    {
        icon: 'stackoverflow',
        label: 'Stack Overflow',
        url: 'https://stackoverflow.com/users/6933004',
    },
    {
        icon: 'twitter',
        label: 'Twitter',
        url: 'https://twitter.com/emroni',
    },
    {
        icon: 'codepen',
        label: 'CodePen',
        url: 'https://codepen.io/Emroni',
    },
];

export default function Connect() {
    return (
        <Section heading="Connect">
            <Transition tag="p">
                For questions or inquiries, feel free to contact me through any of the channels below.
            </Transition>
            <Transition
                tag="ul"
                className="gap-2 grid grid-cols-2 -mx-2 my-4 sm:-mx-3 sm:my-6 md:gap-4 md:-mx-4 md:my-8 lg:grid-cols-4"
            >
                {channels.map((channel, index) => (
                    <li key={index}>
                        <Button icon={channel.icon} url={channel.url}>
                            {channel.label}
                        </Button>
                    </li>
                ))}
            </Transition>
        </Section>
    );
}
