import { useEffect, useState } from 'react';
import { ThemeProvider as JssProvider } from 'react-jss';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';

export function ThemeProvider({ children }) {

    const [theme, setTheme] = useState(null);

    useEffect(() => {
        // Get Tailwind config including customizations
        const twConfig = resolveConfig(tailwindConfig);
        
        // Parse columns into media queries
        const mediaEntries = Object.entries(twConfig.theme.columns)
            .map(([column, size]) => [column, `@media (min-width: ${size})`]);

        // Parse as theme
        const newTheme = {
            ...twConfig.theme,
            media: Object.fromEntries(mediaEntries),
        };
        setTheme(newTheme);
    }, []);

    return theme ? (
        <JssProvider theme={theme}>
            {children}
        </JssProvider>
    ) : null;

}