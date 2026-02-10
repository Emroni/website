'use client';
import Transition from '../Transition';
import { Container, Info, Name } from './styled';
import { EducationBlockProps } from './types';

export default function EducationBlock({ date, degree, institution, study }: EducationBlockProps) {
    return (
        <Transition component={Container}>
            <Name>{study}</Name>
            <Info>
                {date} | {institution}
            </Info>
            {degree && <div>{degree}</div>}
        </Transition>
    );
}
