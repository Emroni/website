import React from 'react';
import * as ROUTES from 'constants/routes';
import Button from 'components/Button';
import Chapter from 'components/Chapter';
import Link from 'components/Link';
import Video from 'components/Video';
import Trans from 'components/Trans';
import Connect from './Connect';

export default function Home() {

    return <div className="page">
        <Chapter title="Hi" background>
            <Trans tag="p">
                I'm Emre, a Full Stack Developer from the Netherlands. With over 12 years of experience, my work includes anything from animated videos to complete websites.
            </Trans>
            <Trans tag="p">
                <Button to={ROUTES.ABOUT}>Read more</Button>
            </Trans>
        </Chapter>
        <Chapter title="Recent work" track="/home/work">
            <Video slug="de-kindertelefoon" type="video" background="tablet" to={ROUTES.WORK}/>
            <Trans tag="p">
                <Button to={ROUTES.WORK}>See what I've been doing</Button>
            </Trans>
        </Chapter>
        <Chapter title="For hire" background>
            <Trans tag="p">
                As I'm currently located in Chiang Mai, Thailand, I work remotely and at a fixed hourly rate. For questions or inquiries, feel free to contact me by <Link href="mailto:hi@emroni.com">email</Link> or through <Link href="https://linkedin.com/in/emroni">LinkedIn</Link>.
            </Trans>
        </Chapter>
        <Chapter title="Connect">
            <Trans tag="p">
                Looking for more? Connect with me through any of the channels below.
            </Trans>
            <Connect/>
        </Chapter>
    </div>;

}