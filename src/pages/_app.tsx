import Head from 'next/head';
import { ThemeProvider, TransitionProvider } from '../providers';
import '../styles/old.scss';

export default function App({ Component, pageProps }) {

    return <ThemeProvider>
        <TransitionProvider>
            <Head>
                <title>Emre Koc - Full Stack Developer</title>
                <meta name="description" content="Full Stack Developer" />
                <meta property="og:url" content="https://emroni.com" />
                <meta property="og:description" content="Full Stack Developer" />
                <meta property="og:site_name" content="Emre Koc" />
                <meta property="og:title" content="Emre Koc" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/share.png" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="shortcut icon" href="/assets/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </TransitionProvider>
    </ThemeProvider>;

}