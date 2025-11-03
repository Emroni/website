'use client';
import _ from 'lodash';
import Transition from '../Transition';
import { Bottom, Clip, Heading, Svg, Top } from './styled';

const topClip = _.range(10).map(index => ({
    x: 9 * index + '%',
    y: 40 * (index % 2) + '%',
}));

const bottomClip = _.range(10).map(index => ({
    x: 9 * index + '%',
    y: 10 * (index % 2) + 80 + '%',
}));

export default function HeaderName() {
    return (
        <Heading>
            <Transition component={Svg} fade={false} stall={0.5}>
                <defs>
                    <clipPath id="top-clip">
                        {topClip.map((item, index) => (
                            <Clip cx={item.x} cy={item.y} key={index} r="13%" />
                        ))}
                    </clipPath>
                    <clipPath id="bottom-clip">
                        {bottomClip.map((item, index) => (
                            <Clip cx={item.x} cy={item.y} key={index} r="8%" />
                        ))}
                    </clipPath>
                </defs>
                <Top clipPath="url(#top-clip)" x="-1%" y="55%">
                    Emre Koc
                </Top>
                <Bottom clipPath="url(#bottom-clip)" y="95%">
                    Senior Software Engineer
                </Bottom>
            </Transition>
        </Heading>
    );
}
