import { Icon, Trans } from '@/components';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    a: {
        '@media (hover)': {
            '&:before, &:after, span:before, span:after': {
                content: '""',
                position: 'absolute',
            },
            '&:before, &:after': {
                height: '1px',
                width: 0,
                transition: '0.25s var(--ease-in)',
            },
            '& span:before, & span:after': {
                height: 0,
                width: '1px',
                transition: '0.25s var(--ease-out) 0.25s',
            },
            '&:before': {
                right: 0,
                top: 0,
            },
            '&:after': {
                bottom: 0,
                left: 0,
            },
            '& span:before': {
                left: 0,
                top: 0,
            },
            '& span:after': {
                bottom: 0,
                right: 0,
            },
            '&:hover, &:focus': {
                '&:before, &:after': {
                    width: '100%',
                },
                '& span:before, & span:after': {
                    height: '100%',
                },
                '&:before': {
                    left: 0,
                    right: 'auto',
                },
                '&:after': {
                    left: 'auto',
                    right: 0,
                },
                '& span:before': {
                    bottom: 0,
                    top: 'auto',
                },
                '& span:after': {
                    bottom: 'auto',
                    top: 0,
                },
            },
        },
    },
    dark: {
        '@media (hover)': {
            '&:before, &:after, span:before, span:after': {
                backgroundColor: 'var(--color-black)',
            },
        },
    },
    light: {
        '@media (hover)': {
            '&:before, &:after, span:before, span:after': {
                backgroundColor: 'var(--color-white)',
            },
        },
    },
});

export default function Button({ children, className, icon, image, imageClassName, light, url }: ButtonProps) {

    const classes = useStyles();

    const anchorClasses = clsx('inline-block leading-none p-2 relative whitespace-nowrap sm:p-3 md:p-4', classes.a, {
        [`${classes.dark}`]: !light,
        [`${classes.light}`]: light,
        'pl-8 sm:pl-9 md:pl-10': icon,
    }, className);

    const imageClasses = clsx('inline-block w-full', imageClassName);

    return <Trans className={anchorClasses} href={url} tag="a" target="_blank" rel="noopener noreferrer">
        {image ? (
            <img alt={children} className={imageClasses} src={image} />
        ) : <>
            {icon && (
                <Icon className="h-4 w-4 left-2 absolute top-1/2 -translate-y-1/2 sm:left-3 md:left-4" name={icon} />
            )}
            {children}
        </>}
        <span className="absolute inset-0" />
    </Trans>;

}