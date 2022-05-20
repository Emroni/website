import { Button, Link, Section, Trans } from '@/components';
import { faCodepen, faGithub, faLinkedinIn, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: any) => ({
    socials: {
        margin: '1em -0.625em',
        [theme.media.sm]: {
            margin: '1.5em -0.875em',
        },
        [theme.media.md]: {
            margin: '2em -1em',
        },
    },
}));

export default function Connect() {

    const classes = useStyles();

    return <Section heading="Connect">
        <Trans tag="p">
            I'm currently located in Chiang Mai, Thailand. I work remotely and at a fixed hourly rate. For questions or inquiries, feel free to contact me through any of the channels below.
        </Trans>
        <Trans tag="ul" className={classes.socials}>
            <Button icon={faLinkedinIn} url="https://linkedin.com/in/emroni">
                LinkedIn
            </Button>
            <Button icon={faStackOverflow} url="https://stackoverflow.com/users/6933004">
                Stack Overflow
            </Button>
            <Button icon={faGithub} url="https://github.com/Emroni">
                GitHub
            </Button>
            <Button icon={faTwitter} url="https://twitter.com/emroni">
                Twitter
            </Button>
            <Button icon={faCodepen} url="https://codepen.io/Emroni">
                CodePen
            </Button>
            <Button icon={faEnvelope} url="mailto:hi@emrekoc.io">
                Email
            </Button>
        </Trans>
        <Trans tag="p">
            <Link href="/assets/Emre-Koc-Resume.pdf">
                Download Resume (PDF)
            </Link>
        </Trans>
    </Section>;

}