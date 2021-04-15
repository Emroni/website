import { Link, Section, Trans } from '../components';

export default function Hire() {

    return <Section title="For hire" background>
        <Trans tag="p">
            I'm currently located in Chiang Mai, Thailand. I work remotely and at a fixed hourly rate.
        </Trans>
        <Trans tag="p">
            For questions or inquiries, feel free to contact me by <Link href="mailto:hi@emrekoc.io">email</Link> or through <Link href="https://linkedin.com/in/emroni">LinkedIn</Link>.
        </Trans>
        <Trans tag="p">
            <Link href="/assets/Emre-Koc-Resume.pdf">Download Resume (PDF)</Link>
        </Trans>
    </Section>;

}