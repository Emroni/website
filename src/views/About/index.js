import React from 'react';
import * as ROUTES from 'constants/routes';
import Button from 'components/Button';
import Chapter from 'components/Chapter';
import Link from 'components/Link';
import Trans from 'components/Trans';
import Skills from './Skills';
import Timeline from './Timeline';

export default function About() {

    return <div className="page">
        <Chapter title="Full Stack Developer">
            <Trans tag="p">
                I've been a web developer for over 12 years now. My passion lies in creating things and being a web developer allows me to create anything I set my mind to. In the ever expanding digital world, the possibilities are endless.
            </Trans>
            <Trans tag="p">
                My main focus is short term microsites for ad campaigns, but I also enjoy working on larger systems for services that involve complex logic and mathematics.
            </Trans>
        </Chapter>
        <Chapter title="Knowledge base" background>
            <Trans tag="p">
                Over the years JavaScript has become my favorite language to work with, and PHP always has my back. For its vast set of capabilities After Effects is my go-to application for animated video.
            </Trans>
            <Trans tag="p">
                I've also fallen in love with certain tools and libraries. I regularly try out new things to see if I'd like to add that to my repertoire.
            </Trans>
            <Skills/>
            <Trans tag="p">
                Apart from working on projects, I've been tutoring other developers as well. The most common are one-on-one sessions, but I've also given advanced math classes and inspiration sessions to groups of any level between intern and senior.
            </Trans>
        </Chapter>
        <Chapter title="Career path">
            <Trans tag="p">
                From the age of ten I knew what I wanted to be when I grew up: a mechanical engineer. Soon after starting my studies at the Technical University Delft I discovered I was also pretty good at programming.
            </Trans>
            <Trans tag="p">
                With Adobe Flash (now called Animate) and ActionScript being what I found most fun to work with, I became a part-time freelance Flash developer.
            </Trans>
            <Timeline/>
            <Trans tag="p">
                After a few successful projects I was offered a permanent position at one of my clients, <Link href="https://wearejust.com">Just</Link>, and switched from university to be their full-time junior Flash developer.
            </Trans>
            <Trans tag="p">
                Surrounded by many bright minds I started to learn other languages than ActionScript, namely PHP and JavaScript. I worked my way through both Front- and Backend projects to learn as much as I could, to eventually become the Digital Lead.
            </Trans>
            <Trans tag="p">
                During that time I also studied Communication and Multimedia Design at Haagse Hogeschool, graduating in 2013 to receive my Bachelor of Information Technology degree.
            </Trans>
            <Trans tag="p">
                A decade of accumulating knowledge later I decided to go to freelancing once again. Since I became location independent and could work remotely from anywhere, am now able to roam the world as a digital nomad.
            </Trans>
        </Chapter>
        <Chapter title="Recent work" background>
            <Trans tag="p">
                Want to see some examples of what I can do?
            </Trans>
            <Trans tag="p">
                <Button to={ROUTES.WORK}>Check out my recent work</Button>
            </Trans>
        </Chapter>
        <Chapter title="Resume">
            <Trans tag="p">
                For more information, download my <Link href={ROUTES.RESUME}>resume</Link> or connect with me on <Link href="https://linkedin.com/in/emroni">LinkedIn</Link>.
            </Trans>
        </Chapter>
    </div>;

}