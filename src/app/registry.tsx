'use client';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { LayoutProps } from './types';

export default function Registry({ children }: LayoutProps) {
    const [styleSheet] = useState(() => new ServerStyleSheet());

    useServerInsertedHTML(() => {
        const styles = styleSheet.getStyleElement();
        styleSheet.instance.clearTag();
        return <>{styles}</>;
    });

    if (typeof window !== 'undefined') {
        return <>{children}</>;
    }

    return <StyleSheetManager sheet={styleSheet.instance}>{children}</StyleSheetManager>;
}
