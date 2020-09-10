import React from 'react';
import Trans from '../../../components/Trans';
import List from './List';

export default function Skills() {

    return <Trans className="skills" stall="1">
        <List title="Know" items="JavaScript,HTML/CSS,PHP,After Effects"/>
        <List title="Love" items="React,Three.js,PixiJS,D3.js"/>
        <List title="Teach" items="Development,Administration,Animation,Mathematics"/>
    </Trans>;

}