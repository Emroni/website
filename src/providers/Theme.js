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
        eases: {
            in: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
            inOut: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            out: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        },
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