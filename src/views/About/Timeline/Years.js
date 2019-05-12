import React from 'react';

export default function Years() {
    const years = new Array(12).fill(0);

    return <div className="timeline-years">
        <div className="timeline-left"/>
        <div className="timeline-right">
            {years.map((year, key) =>
                <span key={key}>{'\'' + (key < 2 ? '0' : '') + (8 + key)}</span>)}
        </div>
    </div>;
}