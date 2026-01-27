import { AnalyticsProvider } from '@/contexts/Analytics';
import { TransitionsProvider } from '@/contexts/Transitions';
import '@/setup/theme.css';
import '@fontsource-variable/work-sans';
import type { Metadata, Viewport } from 'next';
import Registry from './registry';
import { LayoutProps } from './types';

export const metadata: Metadata = {
    description:
        'Senior Software Engineer with nearly 20 years of experience creating web applications, including over a decade as a Technical Lead. Specialized in TypeScript, React, and Node.js, I build user-first, scalable, and maintainable digital products, consistently delivering high-quality code and guiding teams to align engineering decisions with business goals.',
    metadataBase: new URL('https://emrekoc.io'),
    openGraph: {
        description: 'Senior Software Engineer',
        images: '/assets/share.png',
        siteName: 'Emre Koc',
        title: 'Emre Koc',
        type: 'website',
        url: 'https://emrekoc.io',
    },
    title: 'Emre Koc - Senior Software Engineer',
};

export const viewport: Viewport = {
    initialScale: 1,
    themeColor: '#ffffff',
    width: 'device-width',
};

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body>
                <Registry>
                    <AnalyticsProvider>
                        <TransitionsProvider>{children}</TransitionsProvider>
                    </AnalyticsProvider>
                </Registry>
            </body>
        </html>
    );
}
