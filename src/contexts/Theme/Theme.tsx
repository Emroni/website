import { useEffect, useState } from 'react';
import { ThemeProvider as JssProvider } from 'react-jss';

export function ThemeProvider({ children }) {

    const [ready, setReady] = useState(false);

    useEffect(() => {
        // Wait for pre-animation styles to be applied
        setReady(true);
    }, []);

    return ready ? (
        <JssProvider theme={{}}>
            {children}
        </JssProvider>
    ) : null;

}