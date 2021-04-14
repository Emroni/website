import { Image, Trans } from '../components';

export default function Header() {

    return <Trans tag="header">
        <Trans className="header-photo" stall={1}>
            <div>
                <Image alt="Emre Koc" src="/assets/emre-koc.png"/>
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