'use client';
import { Education } from '@/setup';
import Transition from '../Transition';
import { Container, Info, Name } from './styled';

export default function EducationBlock({ degree, endDate, field, institution, startDate }: Education) {
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
