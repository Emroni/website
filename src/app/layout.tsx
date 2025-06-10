import { Layout } from '@/components';
import '@fontsource-variable/work-sans';
import type { Metadata } from 'next';

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

export default function RootLayout({ children }: LayoutProps) {
    return <Layout>{children}</Layout>;
}
