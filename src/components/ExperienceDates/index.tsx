'use client';
import { getDate } from '@/utils';
import Transition from '../Transition';
import { Container } from './styled';
import { ExperienceDatesProps } from './types';

const inputFormat = 'DD/MM/YYYY';
const outputFormat = 'MMM YYYY';

export default function ExperienceDates({ value }: ExperienceDatesProps) {
    const startDate = getDate('01/' + value[0], inputFormat);
    const endDate = getDate('01/' + value[1], inputFormat);
    const duration = Math.ceil(endDate.diff(startDate, 'months', true) / 12);

    return (
        <Transition component={Container} fade={false}>
            {startDate.format(outputFormat)} - {endDate.format(outputFormat)} · {duration} year
            {duration === 1 ? '' : 's'}
        </Transition>
    );
}
