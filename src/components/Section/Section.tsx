import { SectionBackground, SectionHeading } from '@/components';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        '&.background': {
            color: 'var(--color-white)',
        },
        '& p': {
            marginBottom: '1em',
            '&:last-child': {
                marginBottom: 0,
            },
        },
    },
});

export default function Section({ background, children, heading }: SectionProps) {

    const classes = useStyles();

    const containerClasses = clsx('mx-auto px-8 py-12 relative sm:max-w-md sm:px-0 sm:py-16 md:max-w-xl md:py-20 lg:max-w-3xl lg:py-24 xl:py-28', classes.container, {
        background,
    });

    const slug = heading.toLowerCase()
        .replace(/\s/g, '-');

    return <section className={containerClasses} id={slug}>
        <SectionHeading>
            {heading}
        </SectionHeading>
        <div>
            {children}
        </div>
        {background && (
            <SectionBackground />
        )}
    </section>;

}