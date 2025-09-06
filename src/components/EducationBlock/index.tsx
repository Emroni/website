'use client';
import Transition from '../Transition';
import { Container, Info, Name } from './styled';
import { EducationBlockProps } from './types';

export default function EducationBlock({ date, degree, location, name }: EducationBlockProps) {
    return (
        <Transition component={Container}>
            <Name>{name}</Name>
            <Info>
                {date} | {location}
            </Info>
            {degree && <div>{degree}</div>}
        </Transition>
    );
}
