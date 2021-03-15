import { asset } from '../helpers';
import { Image, Trans } from '../components';

export default function Header() {

    return <Trans tag="header" className="background home">
        <Trans className="header-photo" stall="1">
            <div>
                <Image src={asset('emre-koc.png')} alt="Emre Koc"/>
            </div>
        </Trans>
        <svg>
            <g>
                <text y="14%">Emre Koc</text>
                <text y="83%" className="sub">Full Stack Developer</text>
            </g>
        </svg>
    </Trans>;

}