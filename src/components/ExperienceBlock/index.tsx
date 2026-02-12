'use client';
import ExperienceDates from '../ExperienceDates';
import Link from '../Link';
import Transition from '../Transition';
import { Description, Groups, Heading, Title } from './styled';
import { ExperienceBlockProps } from './types';

export default function ExperienceBlock({
    children,
    companyLink,
    companyName,
    dateRange,
    description,
    title,
}: ExperienceBlockProps) {
    return (
        <div>
            <Heading>
                <Transition component={Title} fade={false}>
                    <div>{title}</div>
                    <div> | </div>
                    <div>{companyLink ? <Link href={companyLink}>{companyName}</Link> : companyName}</div>
                </Transition>
                <ExperienceDates value={dateRange} />
            </Heading>
            <Transition component={Description} fade={false} stall={0.1}>
                {description}
            </Transition>
            <Groups>{children}</Groups>
        </div>
    );
}
