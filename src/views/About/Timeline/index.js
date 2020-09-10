import React from 'react';
import Trans from '../../../components/Trans';
import Row from './Row';
import Years from './Years';
import Lines from './Lines';

export default function Timeline() {

    const date = new Date();
    const now = date.getFullYear() + ((date.getMonth() + 1) / 12);

    return <Trans className="timeline" stall="1">
        <Row title="Flash" ranges="2007-2012"/>
        <Row title="Backend" ranges="2009-2010"/>
        <Row title="Frontend" ranges="2010"/>
        <Row title="Full Stack" ranges={`2011-${now}`}/>
        <Row title="Digital Lead" ranges="2014-2018"/>
        <Row title="Freelance" ranges={`2008-2009;2018-${now}`}/>
        <Years/>
        <Lines/>
    </Trans>;

}