'use client';
import { ConnectSection, EducationSection, Header, IntroSection, JobsSection, SkillsSection } from '@/components';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <IntroSection />
                <SkillsSection />
                <JobsSection />
                <EducationSection />
                <ConnectSection />
            </main>
        </>
    );
}
