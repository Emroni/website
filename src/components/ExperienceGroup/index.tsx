'use client';
import ExperienceDates from '../ExperienceDates';
import Link from '../Link';
import Transition from '../Transition';
import { DateRange, Heading, Highlight, Highlights, Title } from './styled';
import { ExperienceGroupProps } from './types';

export default function ExperienceGroup({ dateRange, highlights, title, titleLink }: ExperienceGroupProps) {
    return (
        <div>
            <Heading>
                {title && (
                    <Transition component={Title} fade={false}>
                        {titleLink ? <Link href={titleLink}>{title}</Link> : title}
                    </Transition>
                )}
                {dateRange && (
                    <DateRange>
                        <ExperienceDates value={dateRange} />
                    </DateRange>
                )}
            </Heading>
            <Transition component={Highlights} fade={false}>
                {highlights.map((item, index) => (
                    <Highlight key={index}>{item}</Highlight>
                ))}
            </Transition>
        </div>
    );
}
