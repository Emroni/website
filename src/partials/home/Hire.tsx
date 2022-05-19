import { Link, Resume, Section, Trans } from '@/components';

export default function Hire() {

    return <Section background heading="For hire">
        <Trans tag="p">
            I'm currently located in Chiang Mai, Thailand. I work remotely and at a fixed hourly rate. For questions or inquiries, feel free to contact me by <Link href="mailto:hi@emrekoc.io">email</Link> or through <Link href="https://linkedin.com/in/emroni">LinkedIn</Link>.
        </Trans>
        <Resume/>
    </Section>;

}