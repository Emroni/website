import Connect from './Connect';
import Education from './Education';
import Experience from './Experience';
import Header from './Header';
import Hire from './Hire';
import Intro from './Intro';
import Knowledge from './Knowledge';

export default function Sections() {

    return <>
        <Header/>
        <Intro/>
        <Experience/>
        <Knowledge/>
        <Education/>
        <Hire/>
        <Connect/>
    </>;

}