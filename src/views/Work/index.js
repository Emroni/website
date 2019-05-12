import React from 'react';
import Link from 'components/Link';
import Item from './Item';

export default function Work() {

    const items = [
        {
            title: 'The Parc',
            background: 'laptop',
            color: '#d4ecfc',
            video: 'the-parc',
            link: 'https://theparc.eu',
            summary:
                <p>
                    Made with HTML/CSS, JavaScript and PHP<br/>
                    Designed by <Link href="http://marathonstudio.eu/">Marathon</Link><br/>
                    Visit <Link href="https://theparc.eu">theparc.eu</Link>
                </p>,
            description: 'The Parc - Pharmaceutical Applied Research Center - is a Czech post-graduate program for the next generation of scientists.',
        },
        {
            title: 'De Kindertelefoon',
            background: 'tablet',
            color: '#37c9e5',
            video: 'de-kindertelefoon',
            link: 'https://vimeo.com/316698045',
            summary:
                <p>
                    Animated with After Effects<br/>
                    Designed by <Link href="https://wearejust.com/">Just</Link> for <Link href="https://www.kindertelefoon.nl/">De Kindertelefoon</Link><br/>
                    Watch on <Link href="https://vimeo.com/316698045">Vimeo</Link>
                </p>,
            description: 'De Kindertelefoon is the national child helpline in The Netherlands. This ad campaign is aimed at kids in need who haven\'t dared to reach out yet. It shows that whatever problems they\'re facing, they\'re not alone. The helpline is there to help in any way they can and can be contacted through several channels.',
        },
        {
            title: 'ROC TOP Banner Ads',
            background: 'tablet',
            color: '#65cdf4',
            video: 'roctop',
            summary:
                <p>
                    Made with HTML/CSS<br/>
                    Designed by <Link href="https://wearejust.com/">Just</Link> for <Link href="https://www.roctop.nl/">ROC TOP</Link>
                </p>,
            description: 'ROC TOP offers vocational education in over 50 different fields. Running multiple times with different designs and content in a year long campaign, these banner ads are targeted towards new students and their parents.',
        },
        {
            title: 'Blockchain Decision Tree',
            background: 'laptop',
            color: '#1B75BA',
            video: 'blockchain-decision-tree',
            link: 'https://blockchain.humanityx.nl',
            summary:
                <p>
                    Made with React JS, HTML/CSS and PHP<br/>
                    Designed by <Link href="http://marathonstudio.eu/">Marathon</Link> for <Link href="https://www.humanityx.nl/">HumanityX</Link><br/>
                    Visit <Link href="https://blockchain.humanityx.nl">blockchain.humanityx.nl</Link>
                </p>,
            description: 'HumanityX enables leading organisations working in the peace, justice and humanitarian sector to increase their impact on society with digital innovations. This decision tree acts as a guide to explore the potential and limitations of using blockchain for humanitarian aid.',
        },
        {
            title: 'Applaus voor de Zorg',
            background: 'laptop',
            color: '#f8e7e4',
            video: 'applaus-voor-de-zorg',
            summary:
                <p>
                    Made with JavaScript and PHP<br/>
                    Designed by <Link href="https://www.watch4media.nl/">Watch4Media</Link> for <Link href="https://www.venvn.nl/">V&VN</Link>
                </p>,
            description: 'V&VN is the professional organisation of Nurse Practitioners in the Netherlands. During the International Nurses Day 2018, this microsite allowed nurses to thank one another for their wonderful work by sending a personalised e-card. Users could upload their photo onto an animated avatar and write a short message. Over 6,000 cards were shared in less than a week.',
        },
        {
            title: 'ReelMetrics',
            background: 'tablet',
            color: '#a6262b',
            video: 'reelmetrics',
            link: 'https://vimeo.com/316697815',
            summary:
                <p>
                    Animated with After Effects<br/>
                    Designed by <Link href="https://wearejust.com/">Just</Link> for <Link href="https://www.reelmetrics.com/">ReelMetrics</Link><br/>
                    Watch on <Link href="https://vimeo.com/316697815">Vimeo</Link>
                </p>,
            description: 'ReelMetrics gives subscribers access to the world\'s largest repository of slot design and performance data. This introduction animation explains exactly why they are the best in the business.',
        },
    ];

    return <div className="page">
        <ul className="work">
            {items.map((item, key) =>
                <Item key={key} {...item}/>)}
        </ul>
    </div>;

}