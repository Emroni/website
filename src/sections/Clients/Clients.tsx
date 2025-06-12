'use client';
import { Button, Image, Section, Transition } from '@/components';
import { Container } from './Clients.styled';

const clients = [
    {
        image: 'just.svg',
        imageHeight: 24,
        name: 'Just',
        url: 'https://wearejust.com/',
    },
    {
        image: 'noderelate.svg',
        imageHeight: 40,
        name: 'NodeRelate',
        url: 'https://noderelate.com/',
    },
    {
        image: 'watch4media.svg',
        imageHeight: 36,
        name: 'Watch4Media',
        url: 'https://watch4media.nl/',
    },
    {
        image: 'marathon.svg',
        imageHeight: 40,
        name: 'Marathon',
        url: 'https://www.marathonstudio.cz/english',
    },
    {
        image: 'kromatic.svg',
        imageHeight: 40,
        name: 'Kromatic',
        url: 'https://kromatic.com/',
    },
    {
        image: 'iglu.png',
        imageHeight: 40,
        name: 'Iglu',
        url: 'https://iglu.net/',
    },
    {
        image: 'siccode.svg',
        imageHeight: 28,
        name: 'SIC Code',
        url: 'https://siccode.com/',
    },
    {
        image: 'pressive.png',
        imageHeight: 40,
        name: 'Pressive',
        url: 'https://pressiveweb.com/',
    },
    {
        image: 'reelmetrics.svg',
        imageHeight: 40,
        name: 'ReelMetrics',
        url: 'https://www.reelmetrics.com/',
    },
    {
        image: 'tothepoint.png',
        imageHeight: null,
        name: 'To The Point',
        url: 'https://www.tothepoint.digital/',
    },
    {
        image: 'nijgh.png',
        imageHeight: 64,
        name: 'Nijgh',
        url: 'https://www.nijgh.com/',
    },
    {
        image: 'xim.png',
        imageHeight: 64,
        name: 'Xim',
        url: 'https://xim.systems/',
    },
];

export default function Clients() {
    return (
        <Section heading="Clients">
            <Transition component={Container}>
                {clients.map((client, index) => (
                    <li key={index}>
                        <Button url={client.url}>
                            <Image
                                alt={client.name}
                                height={client.imageHeight}
                                src={`/assets/clients/${client.image}`}
                            />
                        </Button>
                    </li>
                ))}
            </Transition>
        </Section>
    );
}
