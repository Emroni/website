import { TransitionsProvider } from '@/contexts/Transitions/Transitions';
import '@fontsource-variable/work-sans';
import type { Metadata, Viewport } from 'next';
import Registry from './registry';
import './styles.css';

export const metadata: Metadata = {
    title: 'Emre Koc - Full Stack Developer',
    description: 'Full Stack Developer',
    // TODO: Add og metadata
    // property="og:url" content="https://emrekoc.io" />
    // property="og:description" content="Full Stack Developer" />
    // property="og:site_name" content="Emre Koc" />
    // property="og:title" content="Emre Koc" />
    // property="og:type" content="website" />
    // property="og:image" content="/assets/share.png" />
    // name="theme-color" content="#ffffff" />
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
