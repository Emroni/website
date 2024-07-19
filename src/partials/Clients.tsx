import { Button, Section, Transition } from 'components';

const clients = [
    {
        image: 'just.svg',
        imageClassName: 'h-6',
        name: 'Just',
        url: 'https://wearejust.com/',
    },
    {
        image: 'noderelate.svg',
        imageClassName: 'h-10',
        name: 'NodeRelate',
        url: 'https://noderelate.com/',
    },
    {
        image: 'watch4media.svg',
        imageClassName: 'h-9',
        name: 'Watch4Media',
        url: 'https://watch4media.nl/',
    },
    {
        image: 'marathon.svg',
        imageClassName: 'h-10',
        name: 'Marathon',
        url: 'https://www.marathonstudio.cz/english',
    },
    {
        image: 'kromatic.svg',
        imageClassName: 'h-10',
        name: 'Kromatic',
        url: 'https://kromatic.com/',
    },
    {
        image: 'iglu.png',
        imageClassName: 'h-10',
        name: 'Iglu',
        url: 'https://iglu.net/',
    },
    {
        image: 'siccode.svg',
        imageClassName: 'h-7',
        name: 'SIC Code',
        url: 'https://siccode.com/',
    },
    {
        image: 'pressive.png',
        imageClassName: 'h-10',
        name: 'Pressive',
        url: 'https://pressiveweb.com/',
    },
    {
        image: 'reelmetrics.svg',
        imageClassName: 'h-10',
        name: 'ReelMetrics',
        url: 'https://www.reelmetrics.com/',
    },
    {
        image: 'tothepoint.png',
        imageClassName: '',
        name: 'To The Point',
        url: 'https://www.tothepoint.digital/',
    },
    {
        image: 'nijgh.png',
        imageClassName: 'h-16',
        name: 'Nijgh',
        url: 'https://www.nijgh.com/',
    },
    {
        image: 'xim.png',
        imageClassName: 'h-16',
        name: 'Xim',
        url: 'https://xim.systems/',
    },
];

export default function Clients() {

    return <Section background heading="Clients">
        <Transition className="gap-4 grid grid-cols-2 items-center -mx-4 md:gap-6 md:grid-cols-3" tag="ul">
            {clients.map((client, index) => (
                <li key={index}>
                    <Button image={`/assets/clients/${client.image}`} imageClassName={client.imageClassName} light url={client.url}>
                        {client.name}
                    </Button>
                </li>
            ))}
        </Transition>
    </Section>;

}