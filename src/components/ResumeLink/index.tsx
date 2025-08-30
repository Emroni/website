'use client';
import Link from '../Link';
import Transition from '../Transition';
import { Container } from './styled';

export default function ResumeLink() {
    return (
        <Transition component={Container}>
            <Link href="/assets/Emre-Koc-Resume.pdf">Download Resume (PDF)</Link>
        </Transition>
    );
}
