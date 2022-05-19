import { createUseStyles } from 'react-jss';
import { Trans } from '@/components';

const useStyles = createUseStyles((theme: any) => ({
    background: {
        backgroundColor: 'var(--color-blue)',
        height: 0,
        left: '50%',
        position: 'absolute',
        top: '-1rem',
        transform: 'translate(-50%, -50%) skewY(-2deg)',
        transition: 'height 0.5s var(--ease), top 0.5s var(--ease)',
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
}));

export default function Background() {

    const classes = useStyles();

    return <Trans className={classes.background} fade={false}/>;

}