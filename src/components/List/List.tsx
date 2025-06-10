import Transition from '../Transition/Transition';

const classes = {
    list: `{
        '&:before': {
            backgroundColor: 'currentColor',
            content: '""',
            height: 0,
            left: 0,
            position: 'absolute',
            top: 0,
            transition: 'height 0.5s var(--ease)',
            width: '1px',
        },
        '&.active:before': {
            height: '100%',
        },
        '& li': {
            ...generateDelays(),
            padding: '0.25em',
            position: 'relative',
            transition: 'opacity 0.5s var(--ease), transform 0.5s var(--ease)',
            '&:not(.title):before': {
                backgroundColor: 'var(--color-blue-500)',
                content: '""',
                height: '100%',
                left: 0,
                opacity: 0,
                position: 'absolute',
                top: 0,
                transition: 'opacity 0.25s var(--ease)',
                width: '100%',
                zIndex: -1,
            },
            '&:hover:before': {
                opacity: 0.05,
            },
            '&.title': {
                fontWeight: 600,
            },
        },
        '&:not(.active) li': {
            opacity: 0,
            transform: 'translateX(-0.5em)',
        },
    }`,
};

// function generateDelays() {
//     const children = {};
//     for (let i = 1; i <= 15; i++) {
//         children[`&:nth-child(${i})`] = {
//             transitionDelay: `${0.05 * i}s`,
//         };
//     }
//     return children;
// }

export default function List({ children, className, tag = 'ul', title }: ListProps) {
    // const classes = useStyles();
    const listClasses = `'-ml-4 pl-3 relative' ${className} ${classes.list}`;

    return (
        <Transition className={listClasses} fade={false} stall={0.25} tag={tag}>
            {title && (
                <li className="title">
                    <h4>{title}</h4>
                </li>
            )}
            {children}
        </Transition>
    );
}
