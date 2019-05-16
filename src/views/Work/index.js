import React from 'react';
import * as ROUTES from '../../constants/routes';
import Link from '../../components/Link';
import Chapter from '../../components/Chapter';
import Trans from '../../components/Trans';
import Button from '../../components/Button';
import Item from './Item';

export default function Work() {

    const items = [
        {
            title: 'The Parc',
            background: 'laptop',
            color: '#d4ecfc',
            video: 'the-parc',
            design:
                <Link href="http://marathonstudio.eu/">Marathon</Link>,
            link: 'https://theparc.eu',
            tags: [
                'CSS',
                'HTML5',
                'JavaScript',
                'MySQL',
                'PHP',
                'Sketch',
            ],
            description: [
                'The Parc - Pharmaceutical Applied Research Center - is a Czech post-graduate program for the next generation of scientists. This website is meant for students to find information about The Parc and connect to its faculty members.',
                'This classic \'custom site on a budget\' is built with Symfony in PHP and uses Bootstrap to make the frontend work a bit easier. With a little JavaScript it still sports a few fancy elements.',
            ],
        },
        {
            title: 'De Kindertelefoon',
            background: 'tablet',
            color: '#37c9e5',
            video: 'de-kindertelefoon',
            design:
                <Link href="https://wearejust.com/">Just</Link>,
            client:
                <Link href="https://www.kindertelefoon.nl/">De Kindertelefoon</Link>,
            link: 'https://vimeo.com/316698045',
            tags: [
                'After Effects',
                'Illustrator',
            ],
            description: [
                'De Kindertelefoon is the national child helpline in The Netherlands. This ad campaign is aimed at kids in need who haven\'t dared to reach out yet. It shows that whatever problems they\'re facing, they\'re not alone. The helpline is there to help in any way they can and can be contacted through several channels.',
            ],
        },
        {
            title: 'ROC TOP Ads',
            background: 'tablet',
            color: '#65cdf4',
            video: 'roctop',
            design:
                <Link href="https://wearejust.com/">Just</Link>,
            client:
                <Link href="https://www.roctop.nl/">ROC TOP</Link>,
            tags: [
                'After Effects',
                'CSS',
                'ExtendScript',
                'HTML5',
                'Illustrator',
                'JavaScript',
                'Node',
                'PHP',
            ],
            description: [
                'ROC TOP offers vocational education in over 50 different fields. These animated ads are targeted towards new students and their parents.',
                'Running multiple sets in a year long campaign, each set consists of different designs and formats. They\'re either videos made in After Effects or HTML5/CSS banners.',
                'Using my custom built bulk editor for the banners, each can be edited individually, per group of formats, or entire sets. I\'ve created an export script in ExtendScript to achieve the same for the videos.',
            ],
        },
        {
            title: 'Blockchain Decision Tree',
            background: 'laptop',
            color: '#1b75ba',
            video: 'blockchain-decision-tree',
            design:
                <Link href="http://marathonstudio.eu/">Marathon</Link>,
            client:
                <Link href="https://www.humanityx.nl/">HumanityX</Link>,
            link: 'https://blockchain.humanityx.nl',
            tags: [
                'CSS',
                'HTML5',
                'JavaScript',
                'PHP',
                'React',
                'Redux',
                'Sketch',
            ],
            description: [
                'HumanityX enables leading organisations working in the peace, justice and humanitarian sector to increase their impact on society with digital innovations. This decision tree acts as a guide for those organisations to explore the potential and limitations of using blockchain for humanitarian aid.',
                'The admin can add and edit questions to the tree in the CMS on the backend. Each question can have multiple answers, which in turn can be linked to other questions.',
                'Redux is used to store that data in the React frontend, and remembers each choice the user makes. This allows back and forth navigation through the tree while displaying the users previously made choices.',
            ],
        },
        {
            title: 'Applaus voor de Zorg',
            background: 'laptop',
            color: '#f8e7e4',
            video: 'applaus-voor-de-zorg',
            design:
                <Link href="https://www.watch4media.nl/">Watch4Media</Link>,
            client:
                <Link href="https://www.venvn.nl/">V&VN</Link>,
            tags: [
                'CSS',
                'HTML5',
                'JavaScript',
                'MySQL',
                'PHP',
                'Sketch',
            ],
            description: [
                'V&VN is the professional organisation of Nurse Practitioners in the Netherlands. During the International Nurses Day 2018, this microsite allowed nurses to thank one another for their wonderful work by sending a personalised e-card. Over 6,000 cards were shared in less than a week.',
                'Users could upload their photo and position it over an animated avatar using my custom built tool in JavaScript. After writing a short message, it was stored in the database and sent as an email to the receiver, who could view the card back on the site.',
            ],
        },
        {
            title: 'ReelMetrics',
            background: 'tablet',
            color: '#a6262b',
            video: 'reelmetrics',
            design:
                <Link href="https://wearejust.com/">Just</Link>,
            client:
                <Link href="https://www.reelmetrics.com/">ReelMetrics</Link>,
            link: 'https://vimeo.com/316697815',
            tags: [
                'After Effects',
                'Illustrator',
            ],
            description: [
                'ReelMetrics gives subscribers access to the world\'s largest repository of slot design and performance data. This introduction animation explains exactly why they are the best in the business.',
            ],
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