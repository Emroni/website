'use client';
import { Profile } from '@/components';
import { Clients, Connect, Education, Experience, Intro, Knowledge } from '@/sections';

export default function Home() {
    return (
        <>
            <main>
                <Profile />
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
