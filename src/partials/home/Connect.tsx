import { Button, Section, Trans } from '@/components';
import { faCodepen, faGithub, faLinkedinIn, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: any) => ({
    buttons: {
        display: 'grid',
        gap: '0.5em',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        margin: '1em -0.5em',
        [theme.media.sm]: {
            margin: '1.5em -0.625em',
        },
        [theme.media.md]: {
            gap: '1em',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            margin: '2em -0.6875em',
        },
    },
}));

export default function Connect() {

    const classes = useStyles();

    return <Section heading="Connect">
        <Trans tag="p">
            I'm currently located in Chiang Mai, Thailand. I work remotely and at a fixed hourly rate. For questions or inquiries, feel free to contact me through any of the channels below.
        </Trans>
        <Trans tag="ul" className={classes.buttons}>
            <li>
                <Button icon={faLinkedinIn} url="https://linkedin.com/in/emroni">
                    LinkedIn
                </Button>
            </li>
            <li>
                <Button icon={faStackOverflow} url="https://stackoverflow.com/users/6933004">
                    Stack Overflow
                </Button>
            </li>
            <li>
                <Button icon={faGithub} url="https://github.com/Emroni">
                    GitHub
                </Button>
            </li>
            <li>
                <Button icon={faTwitter} url="https://twitter.com/emroni">
                    Twitter
                </Button>
            </li>
            <li>
                <Button icon={faCodepen} url="https://codepen.io/Emroni">
                    CodePen
                </Button>
            </li>
            <li>
                <Button icon={faEnvelope} url="mailto:hi@emrekoc.io">
                    Email
                </Button>
            </li>
        </Trans>
    </Section>;

}