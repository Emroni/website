import Trans from './Trans';

export default function H2({children}) {

    return <Trans tag="h2" stall="0.5">
        <span>
            <span>{children}</span>
        </span>
    </Trans>;

}