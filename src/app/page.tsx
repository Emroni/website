'use client';
import { Header } from '@/components';
import { Clients, Connect, Education, Experience, Intro, Knowledge } from '@/sections';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Intro />
                <Knowledge />
                <Clients />
                <Experience />
                <Education />
                <Connect />
            </main>
        </>
    );
}
