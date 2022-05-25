import { Button, Section, Trans } from '@/components';

const clients = [
    {
        image: 'just.svg',
        name: 'Just',
        url: 'https://wearejust.com/',
    },
    {
        image: 'noderelate.svg',
        name: 'NodeRelate',
        url: 'https://noderelate.com/',
    },
    {
        image: 'watch4media.svg',
        name: 'Watch4Media',
        url: 'https://watch4media.nl/',
    },
    {
        image: 'marathon.svg',
        name: 'Marathon',
        url: 'https://www.marathonstudio.cz/english',
    },
    {
        image: 'kromatic.svg',
        name: 'Kromatic',
        url: 'https://kromatic.com/',
    },
    {
        image: 'iglu.png',
        name: 'Iglu',
        url: 'https://iglu.net/',
    },
    {
        image: 'siccode.svg',
        name: 'SIC Code',
        url: 'https://siccode.com/',
    },
    {
        image: 'pressive.png',
        name: 'Pressive',
        url: 'https://pressiveweb.com/',
    },
    {
        image: 'reelmetrics.svg',
        name: 'ReelMetrics',
        url: 'https://www.reelmetrics.com/',
    },
    // {
    //     image: 'tothepoint.png',
    //     name: 'To The Point',
    //     url: 'https://www.tothepoint.digital/',
    // },
    // {
    //     image: 'nijgh.png',
    //     name: 'Nijgh',
    //     url: 'https://www.nijgh.com/',
    // },
    // {
    //     image: 'xim.png',
    //     name: 'Xim',
    //     url: 'https://xim.systems/',
    // },
];

export default function Clients() {

    return <Section background heading="Clients">
        <Trans className="gap-2 grid grid-cols-2 -mx-4 md:gap-4 md:grid-cols-3" tag="ul">
            {clients.map((client, index) => (
                <li key={index}>
                    <Button image={`/assets/clients/${client.image}`} url={client.url}>
                        {client.name}
                    </Button>
                </li>
            ))}
        </Trans>
    </Section>;

}