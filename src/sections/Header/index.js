import { createUseStyles } from 'react-jss';
import Name from './Name';
import Photo from './Photo';

const useStyles = createUseStyles(theme => ({
    header: {
        fontSize: '1em',
        padding: '3rem 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.media.sm]: {
            fontSize: '1.5em',
            padding: '4rem 0',
        },
        [theme.media.md]: {
            fontSize: '2em',
            padding: '5rem 0',
        },
        [theme.media.lg]: {
            fontSize: '2.5em',
            padding: '6rem 0',
        },
        [theme.media.xl]: {
            fontSize: '3em',
            padding: '7rem 0',
        },
    },
}));

export default function Header() {

    const classes = useStyles();

    return <header className={classes.header}>
        <Photo/>
        <Name/>
    </header>;

}