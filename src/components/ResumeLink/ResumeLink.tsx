'use client';
import Link from '../Link/Link';
import Transition from '../Transition/Transition';
import { Container } from './ResumeLink.styled';

export default function ResumeLink() {
    return (
        <Transition component={Container}>
            <Link href="/assets/Emre-Koc-Resume.pdf">Download Resume (PDF)</Link>
        </Transition>
    );
}
