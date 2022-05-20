import { Connect, Education, Experience, Header, Intro, Knowledge } from '@/partials/home';
import Head from 'next/head';

export default function Home() {

    return <>
        <Head>
            <title>Emre Koc - Full Stack Developer</title>
        </Head>
        <Header />
        <Intro />
        <Experience />
        <Knowledge />
        <Education />
        <Connect />
    </>;

}