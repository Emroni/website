import Head from 'next/head';
import { Clients, Connect, Education, Experience, Header, Intro, Knowledge } from 'partials';

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