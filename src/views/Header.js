import { Photo, Trans } from '../components';

export default function Header() {

    return <Trans tag="header">
        <Photo/>
        <svg>
            <g>
                <text y="14%">Emre Koc</text>
                <text y="83%" className="sub">Full Stack Developer</text>
            </g>
        </svg>
    </Trans>;

}