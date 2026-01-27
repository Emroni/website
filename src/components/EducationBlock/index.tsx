'use client';
import { Education } from '@/setup';
import { getDate } from '@/utils';
import Transition from '../Transition';
import { Container, Info, Name } from './styled';

export default function EducationBlock({ degree, endDate, field, institution, startDate }: Education) {
    return (
        <Transition component={Container}>
            <Name>{field}</Name>
            <Info>
                {getDate(startDate).format('YYYY')} - {getDate(endDate).format('YYYY')} | {institution}
            </Info>
            {degree && <div>{degree}</div>}
        </Transition>
    );
}
