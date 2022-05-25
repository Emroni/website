import { Button, Section, Trans } from '@/components';

const clients = [
    {
        image: 'just.svg',
        url: 'https://wearejust.com/',
    },
    {
        image: 'noderelate.svg',
        url: 'https://noderelate.com/',
    },
    {
        image: 'watch4media.svg',
        url: 'https://watch4media.nl/',
    },
    {
        image: 'marathon.svg',
        url: 'https://www.marathonstudio.cz/english',
    },
    {
        image: 'kromatic.svg',
        url: 'https://kromatic.com/',
    },
    {
        image: 'iglu.png',
        url: 'https://iglu.net/',
    },
    {
        image: 'siccode.svg',
        url: 'https://siccode.com/',
    },
    {
        image: 'pressive.png',
        url: 'https://pressiveweb.com/',
    },
    {
        image: 'reelmetrics.svg',
        url: 'https://www.reelmetrics.com/',
    },
    // {
    //     image: 'tothepoint.png',
    //     url: 'https://www.tothepoint.digital/',
    // },
    // {
    //     image: 'nijgh.png',
    //     url: 'https://www.nijgh.com/',
    // },
    // {
    //     image: 'xim.png',
    //     url: 'https://xim.systems/',
    // },
];

export default function Clients() {

    return <Section background heading="Clients">
        <Trans className="gap-2 grid grid-cols-2 -mx-4 md:gap-4 md:grid-cols-3" tag="ul">
            {clients.map((client, index) => (
                <li key={index}>
                    <Button image={`/assets/clients/${client.image}`} url={client.url} />
                </li>
            ))}
        </Trans>
    </Section>;

}