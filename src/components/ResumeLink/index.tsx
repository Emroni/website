'use client';
import Link from '../Link';
import Transition from '../Transition';
import { Container } from './styled';

// TODO: Update resume and re-enable link
export default function ResumeLink() {
    return null;

    return (
        <Transition component={Container}>
            <Link href="/assets/Emre-Koc-Resume.pdf">Download Resume (PDF)</Link>
        </Transition>
    );
}
