import Transition from '../Transition/Transition';

const classes = {
    background: `{
        backgroundColor: 'var(--color-blue-500)',
        transform: 'translate(-50%, -50%) skewY(-2deg)',
        transition: 'height 0.5s var(--ease), top 0.5s var(--ease)',
        '&.active': {
            height: '100%',
            top: '50%',
        },
    }`,
};

export default function SectionBackground() {
    // const classes = useStyles();

    return (
        <Transition
            className={`absolute h-0 left-1/2 -top-4 w-screen -z-10 sm:-top-6 md:-top-8 lg:-top-10 xl:-top-12 ${classes.background}`}
            fade={false}
        />
    );
}
