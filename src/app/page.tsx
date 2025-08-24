'use client';
import { Header } from '@/components';
import { Connect, Education, Experience, Intro, Knowledge } from '@/sections';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Intro />
                <Knowledge />
                <Experience />
                <Education />
                <Connect />
            </main>
        </>
    );
}
