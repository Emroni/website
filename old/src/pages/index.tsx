import { Header } from 'components';
import Head from 'next/head';
import { Clients, Connect, Education, Experience, Intro, Knowledge } from 'sections';

export default function Home() {

    return <>
        <Head>
            <title>Emre Koc - Full Stack Developer</title>
        </Head>
        <Header />
        <Intro />
        <Knowledge />
        <Clients />
        <Experience />
        <Education />
        <Connect />
    </>;

}