'use client';
import { resume } from '@/setup';
import { ChangeEvent, Fragment, useMemo, useState } from 'react';
import { Container, Controls, Preview } from './styled';
import { Params } from './types';

export default function ResumePage() {
    const [params, setParams] = useState<Params>({
        profile: resume.profile,
    });

    // Parse params into query string
    const query = useMemo(() => {
        const searchParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                searchParams.set(key, value);
            }
        });
        return searchParams.toString();
    }, [params]);

    function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setParams(prevParams => ({
            ...prevParams,
            [name]: value,
        }));
    }

    function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
        const { name, selectedOptions } = e.target;
        setParams(prevParams => ({
            ...prevParams,
            [name]: Array.from(selectedOptions).map(option => option.value),
        }));
    }

    return (
        <Container>
            <Controls>
                {/* Profile */}
                <textarea name="profile" value={params.profile} onChange={handleChange} />

                {/* Skills */}
                <select multiple name="skills" value={params.skills} onChange={handleSelect}>
                    {resume.skills.map((skill, index) => (
                        <Fragment key={index}>
                            <optgroup label={skill.category}>
                                {skill.items.map((item, index) => (
                                    <option key={index} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </optgroup>
                        </Fragment>
                    ))}
                </select>

                {/* Download */}
                <a href={`/api/resume?${query}`} rel="noreferrer" target="_blank">
                    Download
                </a>
            </Controls>

            {/* PDF Export Preview */}
            <Preview src={`/resume/preview?${query}`} title="Preview" />
        </Container>
    );
}
