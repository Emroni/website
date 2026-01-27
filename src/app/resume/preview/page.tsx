'use client';
import { Icon } from '@/components';
import { resume } from '@/setup';
import { getDate } from '@/utils';
import { useSearchParams } from 'next/navigation';
import {
    Body,
    ContactItem,
    Container,
    EducationItem,
    Footer,
    Header,
    Job,
    JobDescription,
    JobItems,
    JobTop,
    LeftColumn,
    Page,
    RightColumn,
    TechStackCategory,
    TechStackItem,
    TechStackItems,
} from './styled';
import { ContactItemProps } from './types';

const contactItems: ContactItemProps[] = [
    {
        icon: 'globe',
        label: 'emrekoc.io',
        link: 'https://emrekoc.io',
    },
    {
        icon: 'envelope',
        label: 'hi@emrekoc.io',
        link: 'mailto:hi@emrekoc.io',
    },
    {
        icon: 'linkedin',
        label: 'linkedin.com/in/emroni',
        link: 'https://linkedin.com/in/emroni',
    },
    {
        icon: 'github',
        label: 'github.com/emroni',
        link: 'https://github.com/emroni',
    },
    {
        icon: 'phone',
        label: '+31683889709',
        link: 'tel:+31683889709',
    },
];

export default function ResumePreviewPage() {
    const searchParams = useSearchParams();

    const profile = searchParams.get('profile') || resume.profile;
    const skills = searchParams.get('skills');

    function getJobs(start: number, end: number) {
        return resume.jobs.slice(start, end).map((job, index) => (
            <Job key={index}>
                <JobTop>
                    <h3>{job.title}</h3>
                    <div>
                        {getDate(job.startDate).format('MMMM YYYY')} | <a href={job.link}>{job.company}</a>
                    </div>
                </JobTop>
                <JobDescription>{job.description}</JobDescription>
                <JobItems>
                    {job.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </JobItems>
            </Job>
        ));
    }

    return (
        <Container>
            {/* Page 1/2 */}
            <Page>
                <Header>
                    <h1>Emre Koc</h1>
                    <div>Senior Software Engineer</div>
                </Header>

                <Body>
                    <LeftColumn>
                        {/* Contact */}
                        <section>
                            <h2>Contact</h2>
                            {contactItems.map((item, index) => (
                                <ContactItem key={index}>
                                    <Icon name={item.icon} />
                                    <a href={item.link} target="_blank" rel="noreferrer">
                                        {item.label}
                                    </a>
                                </ContactItem>
                            ))}
                        </section>

                        {/* Tech Stack */}
                        <section>
                            <h2>Tech Stack</h2>
                            {resume.skills.map((skill, index) => (
                                <TechStackCategory key={index}>
                                    <h3>{skill.category}</h3>
                                    <TechStackItems>
                                        {skill.items
                                            .filter(item => !skills || skills.includes(item))
                                            .map((item, index) => (
                                                <TechStackItem key={index}>{item}</TechStackItem>
                                            ))}
                                    </TechStackItems>
                                </TechStackCategory>
                            ))}
                        </section>
                    </LeftColumn>

                    <RightColumn>
                        {/* Profile */}
                        <section>
                            <h2>Profile</h2>
                            <p>{profile}</p>
                        </section>

                        {/* Work Experience 1/2 */}
                        <section>
                            <h2>Work Experience</h2>
                            {getJobs(0, 2)}
                        </section>
                    </RightColumn>
                </Body>
            </Page>

            {/* Page 2/2 */}
            <Page>
                <Body>
                    <LeftColumn>
                        <section>
                            {/* Education */}
                            <h2>Education</h2>
                            {resume.education.map((education, index) => (
                                <EducationItem key={index}>
                                    <h3>{education.field}</h3>
                                    <h4>{`${getDate(education.startDate).format('YYYY')} - ${getDate(education.endDate).format('YYYY')} | ${education.institution}`}</h4>
                                    {education.degree && <div>{education.degree}</div>}
                                </EducationItem>
                            ))}
                        </section>

                        <section>
                            {/* Languages */}
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
                        {/* Work Experience 2/2 */}
                        <section>{getJobs(2, 6)}</section>
                    </RightColumn>
                </Body>

                <Footer />
            </Page>
        </Container>
    );
}
