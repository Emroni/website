import { ConnectSection, EducationSection, ExperienceSection, Header, IntroSection, TechSection } from '@/components';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <IntroSection />
                <ExperienceSection />
                <TechSection />
                <EducationSection />
                <ConnectSection />
            </main>
        </>
    );
}
