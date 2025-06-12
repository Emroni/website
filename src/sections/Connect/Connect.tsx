'use client';
import { Button, Section, Transition } from '@/components';
import { Container } from './Connect.styled';

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
            <Transition component="p">
                For questions or inquiries, feel free to contact me through any of the channels below.
            </Transition>
            <Transition component={Container}>
                {channels.map((channel, index) => (
                    <li key={index}>
                        <Button icon={channel.icon as IconName} url={channel.url}>
                            {channel.label}
                        </Button>
                    </li>
                ))}
            </Transition>
        </Section>
    );
}
