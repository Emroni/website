'use client';
import { Header } from '@/components';
import { Connect, Education, Experience, Intro, Tech } from '@/sections';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Intro />
                <Tech />
                <Experience />
                <Education />
                <Connect />
            </main>
        </>
    );
}
