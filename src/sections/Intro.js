import { Resume, Section, Trans } from '../components';

export default function Intro() {

    return <Section background title="Hi">
        <Trans tag="p">
            I’m an expert Full Stack Developer with 15 years of experience in web technologies. With extensive knowledge of JavaScript and PHP, my specialty lies in React and Symfony frameworks. I have a consistent record of rapidly delivering high quality code and valuable consultancy on processes and structure, as well as the ability to manage teams of developers. My work is both creative and methodical, showcasing my passion for programming.
        </Trans>
        <Trans tag="p">
            I build custom frontend and backend solutions, automation tools, motion design and animations. My experience in those fields have also allowed me to mentor dozens of developers with any skill level between intern and senior.
        </Trans>
        <Resume/>
    </Section>;

}