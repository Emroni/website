import { ThemeProvider as JssProvider } from 'react-jss';

export function ThemeProvider({children}) {

    const styles = getComputedStyle(document.body);

    const sizes = {
        xs: styles.getPropertyValue('--size-xs'),
        sm: styles.getPropertyValue('--size-sm'),
        md: styles.getPropertyValue('--size-md'),
        lg: styles.getPropertyValue('--size-lg'),
        xl: styles.getPropertyValue('--size-xl'),
        xxl: styles.getPropertyValue('--size-xxl'),
    };

    const theme = {
        media: {
            xs: `@media (min-width: ${sizes.xs})`,
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