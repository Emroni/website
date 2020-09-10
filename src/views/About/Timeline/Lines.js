import React from 'react';

export default function Lines() {

    const years = new Array(16).fill(0);

    return <div className="timeline-lines">
        <div className="timeline-left"/>
        <div className="timeline-right">
            {years.map((year, key) => <span key={key}/>)}
        </div>
    </div>;

}