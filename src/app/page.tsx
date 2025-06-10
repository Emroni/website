import { Header } from '@/components';
import { Clients, Connect, Education, Experience, Intro, Knowledge } from '@/sections';

export default function Home() {
    return (
        <>
            <Header />
            <Intro />
            <Knowledge />
            <Clients />
            <Experience />
            <Education />
            <Connect />
        </>
    );
}
