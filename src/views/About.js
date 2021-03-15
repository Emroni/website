import React from 'react';
import { asset } from '../helpers';
import { Chapter, Link, List, Trans } from '../components';

export default function About() {

    return <Chapter title="Full Stack Developer">
        <Trans tag="p">
            With extensive knowledge of JavaScript and PHP, my specialty lies in React and Symfony frameworks. I have a consistent record of rapidly delivering high quality code, as well as automation solutions for building processes.
        </Trans>
        <Trans className="skills" stall="1">
            <List title="Know" items="JavaScript,PHP,HTML/CSS"/>
            <List title="Love" items="React,Three.js,D3.js"/>
            <List title="Teach" items="Development,Animation,Automation"/>
        </Trans>
        <Trans tag="p">
            I build custom frontend and backend solutions, automation tools, motion design and animations. My experience in those fields have also allowed me to mentor dozens of developers with any skill level between intern and senior.
        </Trans>
        <Trans tag="p">
            For more information, download my <Link href={asset('Emre-Koc-Resume.pdf')}>resume</Link> or connect with me on <Link href="https://linkedin.com/in/emroni">LinkedIn</Link>.
        </Trans>
    </Chapter>;

}