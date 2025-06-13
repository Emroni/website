import { TransitionsProvider } from '@/contexts/Transitions/Transitions';
import '@fontsource-variable/work-sans';
import type { Metadata, Viewport } from 'next';
import Registry from './registry';
import './styles.css';

export const metadata: Metadata = {
    description: 'Full Stack Developer',
    openGraph: {
        description: 'Full Stack Developer',
        images: '/assets/share.png',
        siteName: 'Emre Koc',
        title: 'Emre Koc',
        type: 'website',
        url: 'https://emrekoc.io',
    },
    themeColor: '#ffffff',
    title: 'Emre Koc - Full Stack Developer',
};

export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width',
};

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body>
                <Registry>
                    <TransitionsProvider>{children}</TransitionsProvider>
                </Registry>
            </body>
        </html>
    );
}
