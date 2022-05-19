import Head from 'next/head';
import Script from 'next/script';
import { ThemeProvider, TransitionProvider } from '../providers';
import '../styles/index.css';

export default function App({ Component, pageProps }) {

    return <>
        <Head>
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QP155SXRPR" />
        <Script src="/assets/gtag.js" />
        <ThemeProvider>
            <TransitionProvider>
                <Component {...pageProps} />
            </TransitionProvider>
        </ThemeProvider>
    </>;

}