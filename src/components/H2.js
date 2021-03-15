import Trans from './Trans';

export default function H2({children, icon}) {

    const className = icon || 'code';

    return <Trans tag="h2" className={className} stall="0.5">
        <span>
            <span>{children}</span>
        </span>
    </Trans>;

}