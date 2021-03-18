import * as classnames from 'classnames';
import H2 from './H2';
import Trans from './Trans';

export default function Chapter({background, children, title}) {

    const className = classnames('container', {
        background,
    });

    const slug = title.toLowerCase().replace(/\s/g, '-');

    return <Trans className={className} id={slug}>
        <H2>{title}</H2>
        {children}
    </Trans>;

}