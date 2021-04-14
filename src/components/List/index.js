import { createUseStyles } from 'react-jss';
import { Trans } from '../index';
import Items from './Items';
import Title from './Title';

const useStyles = createUseStyles(theme => ({
    wrap: {
        margin: '1em 0',
        [theme.media.sm]: {
            flex: 1,
            padding: '0 0.5em',
            margin: 0,
        },
    },
    container: {
        position: 'relative',
        '&:before, &:after': {
            content: '""',
            backgroundColor: 'var(--color-black)',
            top: '0.625em',
            height: 'calc(100% - 0.625em)',
            width: '1px',
            position: 'absolute',
            transition: 'height 0.25s',
            '$wrap:not(.active) &': {
                height: '0 !important',
            },
        },
        '&:before': {
            left: 0,
            transitionDelay: '0.05s',
            transitionTimingFunction: 'var(--ease-in)',
        },
        '&:after': {
            right: 0,
            transitionDelay: '0.3s',
            transitionTimingFunction: 'var(--ease-out)',
        },
    },
}));

export default function List({
                                 title,
                                 items,
                             }) {

    const classes = useStyles();

    return <Trans className={classes.wrap} fade={false} stall={0.1}>
        <div className={classes.container}>
            <Title>{title}</Title>
            <Items items={items}/>
        </div>
    </Trans>;

}