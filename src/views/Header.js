import React from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import * as ROUTES from 'constants/routes';
import Close from 'components/Close';
import Trans from 'components/Trans';

function Header({location}) {

    const className = classnames('background', {
        home: location.pathname === ROUTES.HOME,
        about: location.pathname === ROUTES.ABOUT,
        work: location.pathname === ROUTES.WORK,
    });

    return <Trans tag="header" stall="1" className={className}>
        <svg>
            <g>
                <text x="50%" y="30%">Emre Koc</text>
                <text x="50%" y="70%" className="sub">Full Stack Developer</text>
            </g>
            <g>
                <text x="50%" y="30%" className="sub">Emre Koc</text>
                <text x="50%" y="70%">About me</text>
            </g>
            <g>
                <text x="50%" y="30%" className="sub">Emre Koc</text>
                <text x="50%" y="70%">Recent work</text>
            </g>
        </svg>
        <Close to={ROUTES.HOME} active={location.pathname !== ROUTES.HOME}/>
    </Trans>;

}

export default withRouter(Header);