import { ThemeProvider as JssProvider } from 'react-jss';

export function ThemeProvider({children}) {

    const sizes = {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1440px',
    };

    const theme = {
        media: {
            sm: `@media (min-width: ${sizes.sm})`,
            md: `@media (min-width: ${sizes.md})`,
            lg: `@media (min-width: ${sizes.lg})`,
            xl: `@media (min-width: ${sizes.xl})`,
            xxl: `@media (min-width: ${sizes.xxl})`,
        },
        sizes,
    };

    return <JssProvider theme={theme}>{children}</JssProvider>;

}