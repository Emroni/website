import { createUseStyles } from 'react-jss';
import Name from './Name';
import Photo from './Photo';

const useStyles = createUseStyles((theme: any) => ({
    header: {
        fontSize: '1.6125em',
        padding: '1em 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.media.xs]: {
            fontSize: '2em',
            // padding: '4em 0',
        },
        [theme.media.sm]: {
            fontSize: '3em',
            // padding: '4em 0',
        },
        [theme.media.md]: {
            fontSize: '3em',
            // padding: '5em 0',
        },
        [theme.media.lg]: {
            fontSize: '3em',
            // padding: '6em 0',
        },
        [theme.media.xl]: {
            fontSize: '4em',
            // padding: '7em 0',
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