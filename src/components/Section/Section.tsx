import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import Background from './Background';
import Title from './Title';

const useStyles = createUseStyles((theme: any) => ({
    container: {
        boxSizing: 'border-box',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '3em 2em',
        position: 'relative',
        [theme.media.sm]: {
            maxWidth: theme.sizes.sm,
            padding: '4em',
        },
        [theme.media.md]: {
            maxWidth: theme.sizes.md,
            padding: '5em',
        },
        [theme.media.lg]: {
            maxWidth: theme.sizes.lg,
            padding: '6rem',
        },
        [theme.media.xl]: {
            padding: '7rem',
        },
        '&.background': {
            color: 'var(--color-white)',
        },
    },
}));

export default function Section({
                                    background = false,
                                    children,
                                    title,
                                }) {

    const classes = useStyles();

    const containerClasses = clsx(classes.container, {
        background,
    });

    const slug = title.toLowerCase()
        .replace(/\s/g, '-');

    return <section className={containerClasses} id={slug}>
        <Title>{title}</Title>
        <div>{children}</div>
        {background && (
            <Background/>)}
    </section>;

}