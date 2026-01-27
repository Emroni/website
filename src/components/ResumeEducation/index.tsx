import { Education } from '@/setup';
import { getDate } from '@/utils';
import { Container } from './styled';

export default function ResumeEducation({ degree, endDate, field, institution, startDate }: Education) {
    return (
        <Container>
            <h3>{field}</h3>
            <h4>{`${getDate(startDate).format('YYYY')} - ${getDate(endDate).format('YYYY')} | ${institution}`}</h4>
            {degree && <div>{degree}</div>}
        </Container>
    );
}
