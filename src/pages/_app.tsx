import { ThemeProvider, TransitionProvider } from '../providers';
import '../styles/old.scss';

export default function App({ Component, pageProps }) {

    return <ThemeProvider>
        <TransitionProvider>
            <Component {...pageProps} />
        </TransitionProvider>
    </ThemeProvider>;

}