import * as classnames from 'classnames';
import { createUseStyles } from 'react-jss';
import { H2, Trans } from './index';

const useStyles = createUseStyles(theme => ({
    background: {
        backgroundColor: theme.colors.blue,
        height: 0,
        left: '50%',
        position: 'absolute',
        top: '-1rem',
        transform: 'translate(-50%, -50%) skewY(-2deg)',
        transition: `height 0.5s ${theme.eases.inOut}, top 0.5s ${theme.eases.inOut}`,
        width: '100vw',
        zIndex: -1,
        [theme.media.sm]: {
            top: '-1.5rem',
        },
        [theme.media.md]: {
            top: '-2rem',
        },
        [theme.media.lg]: {
            top: '-2.5rem',
        },
        [theme.media.xl]: {
            top: '-3rem',
        },
        '&.active': {
            height: '100%',
            top: '50%',
        },
    },
    container: {
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
            color: theme.colors.white,
        },
    },
}));

export default function Chapter({
                                    background,
                                    children,
                                    title,
                                }) {

    const classes = useStyles();

    const containerClasses = classnames(classes.container, {
        background,
    });

    const slug = title.toLowerCase()
        .replace(/\s/g, '-');

    return <div className={containerClasses} id={slug}>
        <H2>{title}</H2>
        {children}
        {background && (
            <Trans className={classes.background} fade={false}/>)}
    </div>;

}