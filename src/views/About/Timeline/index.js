import React from 'react';
import Trans from 'components/Trans';
import Row from './Row';
import Years from './Years';
import Lines from './Lines';

export default function Timeline() {
    return <Trans className="timeline" stall="1">
        <Row title="Flash" ranges="2008-2012"/>
        <Row title="Backend" ranges="2009-2010"/>
        <Row title="Frontend" ranges="2010"/>
        <Row title="Full Stack" ranges="2011-2020"/>
        <Row title="Digital Lead" ranges="2014-2018"/>
        <Row title="Freelance" ranges="2008-2009;2018-2020"/>
        <Years/>
        <Lines/>
    </Trans>;
}