import React from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import * as ROUTES from '../constants/routes';
import { asset } from '../constants/paths';
import Close from '../components/Close';
import Image from '../components/Image';
import Trans from '../components/Trans';

function Header({location}) {

    const className = classnames('background', {
        home: location.pathname === ROUTES.HOME,
        about: location.pathname === ROUTES.ABOUT,
        work: location.pathname === ROUTES.WORK,
    });

    return <Trans tag="header" className={className}>
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
            <g>
                <text y="14%" className="sub">Emre Koc</text>
                <text y="83%">About me</text>
            </g>
            <g>
                <text y="14%" className="sub">Emre Koc</text>
                <text y="83%">Recent work</text>
            </g>
        </svg>
        <Close to={ROUTES.HOME} active={location.pathname !== ROUTES.HOME}/>
    </Trans>;

}

export default withRouter(Header);