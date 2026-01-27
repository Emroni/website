'use client';
import { Params } from '@fortawesome/fontawesome-svg-core';
import { useMemo, useState } from 'react';
import { Container, Controls, Preview } from './styled';

export default function ResumePage() {
    const [params] = useState<Params>({});

    const query = useMemo(() => {
        const searchParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                searchParams.set(key, value);
            }
        });
        return searchParams.toString();
    }, [params]);

    return (
        <Container>
            <Controls>
                <a href="/api/resume" rel="noreferrer" target="_blank">
                    Download
                </a>
            </Controls>

            <Preview src={`/resume/preview?${query}`} title="Preview" />
        </Container>
    );
}
