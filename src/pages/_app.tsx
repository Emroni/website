import { ThemeProvider, TransitionProvider } from '../providers';
import '../styles/index.css';

export default function App({ Component, pageProps }) {

    return <ThemeProvider>
        <TransitionProvider>
            <Component {...pageProps} />
        </TransitionProvider>
    </ThemeProvider>;

}