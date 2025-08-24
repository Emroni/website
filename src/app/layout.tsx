import { AnalyticsProvider } from '@/contexts/Analytics';
import { TransitionsProvider } from '@/contexts/Transitions';
import '@fontsource-variable/work-sans';
import type { Metadata, Viewport } from 'next';
import Registry from './registry';
import './styles.css';
import { LayoutProps } from './types';

export const metadata: Metadata = {
    description: 'Full Stack Developer',
    metadataBase: new URL('https://emrekoc.io'),
    openGraph: {
        description: 'Full Stack Developer',
        images: '/assets/share.png',
        siteName: 'Emre Koc',
        title: 'Emre Koc',
        type: 'website',
        url: 'https://emrekoc.io',
    },
    title: 'Emre Koc - Full Stack Developer',
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
