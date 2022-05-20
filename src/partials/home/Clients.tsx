import { Button, Section, Trans } from '@/components';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: any) => ({
    clients: {
        display: 'grid',
        gap: '0.5em',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        margin: '0 -1em',
        [theme.media.md]: {
            gap: '1em',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        },
    },
}));

export default function Clients() {

    const classes = useStyles();

    return <Section background heading="Clients">
        <Trans className={classes.clients} tag="ul">
            <li>
                <Button image="/assets/clients/just.svg" url="https://wearejust.com/" />
            </li>
            <li>
                <Button image="/assets/clients/noderelate.svg" url="https://noderelate.com/" />
            </li>
            <li>
                <Button image="/assets/clients/watch4media.svg" url="https://watch4media.nl/" />
            </li>
            <li>
                <Button image="/assets/clients/marathon.svg" url="https://www.marathonstudio.cz/english" />
            </li>
            <li>
                <Button image="/assets/clients/kromatic.svg" url="https://kromatic.com/" />
            </li>
            <li>
                <Button image="/assets/clients/iglu.png" url="https://iglu.net/" />
            </li>
            <li>
                <Button image="/assets/clients/siccode.svg" url="https://siccode.com/" />
            </li>
            <li>
                <Button image="/assets/clients/pressive.png" url="https://pressiveweb.com/" />
            </li>
            <li>
                <Button image="/assets/clients/reelmetrics.svg" url="https://www.reelmetrics.com/" />
            </li>
            {/* 
            <li>
                <Button image="/assets/clients/tothepoint.png" url="https://www.tothepoint.digital/" />
            </li>
            <li>
                <Button image="/assets/clients/nijgh.png" url="https://www.nijgh.com/" />
            </li>
            <li>
                <Button image="/assets/clients/xim.png" url="https://xim.systems/" />
            </li> 
            */}
        </Trans>
    </Section>;

}