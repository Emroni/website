'use client';
import Transition from '../Transition';
import { Container, Info, Name } from './styled';
import { EducationBlockProps } from './types';

export default function EducationBlock({ degree, endDate, field, institution, startDate }: EducationBlockProps) {
    return (
        <Transition component={Container}>
            <Name>{field}</Name>
            <Info>
                {startDate} - {endDate} | {institution}
            </Info>
            {degree && <div>{degree}</div>}
        </Transition>
    );
}
