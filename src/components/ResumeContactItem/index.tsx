import Icon from '../Icon';
import { Container } from './styled';
import { ResumeContactItemProps } from './types';

export default function ResumeContactItem({ children, href, icon }: ResumeContactItemProps) {
    return (
        <Container>
            <Icon name={icon} />
            <a href={href}>{children}</a>
        </Container>
    );
}
