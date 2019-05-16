import React from 'react';
import * as ROUTES from 'constants/routes';
import Link from 'components/Link';
import Chapter from 'components/Chapter';
import Trans from 'components/Trans';
import Button from 'components/Button';
import Item from './Item';

export default function Work() {

    const items = [
        {
            title: 'The Parc',
            background: 'laptop',
            color: '#d4ecfc',
            video: 'the-parc',
            design: <Link href="http://marathonstudio.eu/">Marathon</Link>,
            link: 'https://theparc.eu',
            tags: [
                'CSS3',
                'HTML5',
                'JavaScript',
                'MySQL',
                'PHP',
                'Sketch',
                'Symfony',
                'Webpack',
            ],
            description: 'The Parc - Pharmaceutical Applied Research Center - is a Czech post-graduate program for the next generation of scientists. This website allows students to find information about The Parc and connect to its faculty members.',
        },
        {
            title: 'De Kindertelefoon',
            background: 'tablet',
            color: '#37c9e5',
            video: 'de-kindertelefoon',
            design: <Link href="https://wearejust.com/">Just</Link>,
            client: <Link href="https://www.kindertelefoon.nl/">De Kindertelefoon</Link>,
            link: 'https://vimeo.com/316698045',
            tags: [
                'After Effects',
                'Illustrator',
            ],
            description: 'De Kindertelefoon is the national child helpline in The Netherlands. This ad campaign is aimed at kids in need who haven\'t dared to reach out yet. It shows that whatever problems they\'re facing, they\'re not alone. The helpline is there to help in any way they can and can be contacted through several channels.',
        },
        {
            title: 'ROC TOP Banner Ads',
            background: 'tablet',
            color: '#65cdf4',
            video: 'roctop',
            design: <Link href="https://wearejust.com/">Just</Link>,
            client: <Link href="https://www.roctop.nl/">ROC TOP</Link>,
            tags: [
                'After Effects',
                'CSS3',
                'ExtendScript',
                'HTML5',
                'Illustrator',
                'JavaScript',
                'Node',
                'PHP',
                'Webpack',
            ],
            description: 'ROC TOP offers vocational education in over 50 different fields. Running multiple times with different designs and content in a year long campaign, these banner ads are targeted towards new students and their parents.',
        },
        {
            title: 'Blockchain Decision Tree',
            background: 'laptop',
            color: '#1b75ba',
            video: 'blockchain-decision-tree',
            design: <Link href="http://marathonstudio.eu/">Marathon</Link>,
            client: <Link href="https://www.humanityx.nl/">HumanityX</Link>,
            link: 'https://blockchain.humanityx.nl',
            tags: [
                'CSS3',
                'HTML5',
                'JavaScript',
                'Node',
                'PHP',
                'React',
                'Sketch',
                'Symfony',
                'Webpack',
            ],
            description: 'HumanityX enables leading organisations working in the peace, justice and humanitarian sector to increase their impact on society with digital innovations. This decision tree acts as a guide to explore the potential and limitations of using blockchain for humanitarian aid.',
        },
        {
            title: 'Applaus voor de Zorg',
            background: 'laptop',
            color: '#f8e7e4',
            video: 'applaus-voor-de-zorg',
            design: <Link href="https://www.watch4media.nl/">Watch4Media</Link>,
            client: <Link href="https://www.venvn.nl/">V&VN</Link>,
            tags: [
                'CSS3',
                'HTML5',
                'JavaScript',
                'MySQL',
                'PHP',
                'Sketch',
                'Symfony',
                'Webpack',
            ],
            description: 'V&VN is the professional organisation of Nurse Practitioners in the Netherlands. During the International Nurses Day 2018, this microsite allowed nurses to thank one another for their wonderful work by sending a personalised e-card. Users could upload their photo onto an animated avatar and write a short message. Over 6,000 cards were shared in less than a week.',
        },
        {
            title: 'ReelMetrics',
            background: 'tablet',
            color: '#a6262b',
            video: 'reelmetrics',
            design: <Link href="https://wearejust.com/">Just</Link>,
            client: <Link href="https://www.reelmetrics.com/">ReelMetrics</Link>,
            link: 'https://vimeo.com/316697815',
            tags: [
                'After Effects',
                'Illustrator',
            ],
            description: 'ReelMetrics gives subscribers access to the world\'s largest repository of slot design and performance data. This introduction animation explains exactly why they are the best in the business.',
        },
    ];

    return <div className="page">
        <ul className="work">
            {items.map((item, key) =>
                <Item key={key} {...item}/>)}
        </ul>
        <Chapter title="About me" background>
            <Trans tag="p">
                Want to know more about my background and career?
            </Trans>
            <Trans tag="p">
                <Button to={ROUTES.ABOUT}>Read my story</Button>
            </Trans>
        </Chapter>
    </div>;

}