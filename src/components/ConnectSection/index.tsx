'use client';
import Button from '../Button';
import Section from '../Section';
import Transition from '../Transition';
import { Container } from './styled';
import { Channel } from './types';

const channels: Channel[] = [
    {
        icon: 'envelope',
        label: 'Email',
        url: 'mailto:hi@emrekoc.io',
    },
    {
        icon: 'linkedin',
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/emroni',
    },
    {
        icon: 'upwork',
        label: 'Upwork',
        url: 'https://www.upwork.com/freelancers/~01677c361fd4d5063c',
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
        icon: 'codepen',
        label: 'CodePen',
        url: 'https://codepen.io/Emroni',
    },
];

export default function ConnectSection() {
    return (
        <Section title="Connect">
            <Transition component="p">
                For questions or inquiries, feel free to contact me through any of the channels below.
            </Transition>
            <Transition component={Container}>
                {channels.map((channel, index) => (
                    <li key={index}>
                        <Button icon={channel.icon} label={channel.label} url={channel.url} />
                    </li>
                ))}
            </Transition>
        </Section>
    );
}
