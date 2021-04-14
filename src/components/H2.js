import Trans from './Trans';

export default function H2({children}) {

    return <Trans stall={0.5} tag="h2">
        <span>
            <span>{children}</span>
        </span>
    </Trans>;

}