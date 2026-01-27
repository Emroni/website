'use client';
import { ResumeContactItem, ResumeEducation, ResumeJob, ResumeSkill } from '@/components';
import { resume } from '@/setup';
import { Body, Container, Footer, Head, LeftColumn, Page, RightColumn } from './styled';

export default function ResumePreviewPage() {
    return (
        <Container>
            <Page>
                <Head>
                    <h1>Emre Koc</h1>
                    <div>Senior Software Engineer</div>
                </Head>

                <Body>
                    <LeftColumn>
                        <section>
                            <h2>Contact</h2>
                            <ResumeContactItem href="https://emrekoc.io" icon="globe">
                                emrekoc.io
                            </ResumeContactItem>
                            <ResumeContactItem href="mailto:hi@emrekoc.io" icon="envelope">
                                hi@emrekoc.io
                            </ResumeContactItem>
                            <ResumeContactItem href="https://linkedin.com/in/emroni" icon="linkedin">
                                linkedin.com/in/emroni
                            </ResumeContactItem>
                            <ResumeContactItem href="https://github.com/emroni" icon="github">
                                github.com/emroni
                            </ResumeContactItem>
                            <ResumeContactItem href="tel:+31683889709" icon="phone">
                                +31683889709
                            </ResumeContactItem>
                        </section>

                        <section>
                            <h2>Tech Stack</h2>
                            {resume.skills.map((skill, index) => (
                                <ResumeSkill key={index} {...skill} />
                            ))}
                        </section>
                    </LeftColumn>

                    <RightColumn>
                        <section>
                            <h2>Profile</h2>
                            <p>{resume.profile}</p>
                        </section>

                        <section>
                            <h2>Work Experience</h2>
                            {resume.jobs.slice(0, 2).map((job, index) => (
                                <ResumeJob key={index} {...job} />
                            ))}
                        </section>
                    </RightColumn>
                </Body>
            </Page>

            <Page>
                <Body>
                    <LeftColumn>
                        <section>
                            <h2>Education</h2>
                            {resume.education.map((education, index) => (
                                <ResumeEducation key={index} {...education} />
                            ))}
                        </section>

                        <section>
                            <h2>Languages</h2>
                            <div>
                                <b>Dutch</b> native
                            </div>
                            <div>
                                <b>English</b> fluent
                            </div>
                        </section>
                    </LeftColumn>

                    <RightColumn>
                        <section>
                            {resume.jobs.slice(2).map((job, index) => (
                                <ResumeJob key={index} {...job} />
                            ))}
                        </section>
                    </RightColumn>
                </Body>

                <Footer />
            </Page>
        </Container>
    );
}
