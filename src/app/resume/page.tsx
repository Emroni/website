'use client';
import { resume } from '@/setup';
import { ChangeEvent, useMemo, useState } from 'react';
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

    return (
        <Container>
            <Controls>
                <textarea name="profile" value={params.profile} onChange={handleChange} />

                <a href={`/api/resume?${query}`} rel="noreferrer" target="_blank">
                    Download
                </a>
            </Controls>

            <Preview src={`/resume/preview?${query}`} title="Preview" />
        </Container>
    );
}
