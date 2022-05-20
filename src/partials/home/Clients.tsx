import { Button, Section, Trans } from '@/components';

export default function Clients() {

    return <Section background heading="Clients">
        <Trans tag="p">
            <Button image="/assets/clients/just.svg" url="https://wearejust.com/"/>
            <Button image="/assets/clients/noderelate.svg" url="https://noderelate.com/"/>
            <Button image="/assets/clients/watch4media.svg" url="https://watch4media.nl/"/>
            <Button image="/assets/clients/marathon.svg" url="https://www.marathonstudio.cz/english"/>
            <Button image="/assets/clients/kromatic.svg" url="https://kromatic.com/"/>
            <Button image="/assets/clients/iglu.png" url="https://iglu.net/"/>
            <Button image="/assets/clients/siccode.svg" url="https://siccode.com/"/>
            <Button image="/assets/clients/pressive.png" url="https://pressiveweb.com/"/>
            <Button image="/assets/clients/nijgh.png" url="https://www.nijgh.com/"/>
            <Button image="/assets/clients/xim.png" url="https://xim.systems/"/>
            <Button image="/assets/clients/tothepoint.png" url="https://www.tothepoint.digital/"/>
            <Button image="/assets/clients/reelmetrics.svg" url="https://www.reelmetrics.com/"/>
        </Trans>
    </Section>;

}