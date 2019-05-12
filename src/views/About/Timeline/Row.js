import React from 'react';

export default function Row({title, ranges}) {
    ranges = ranges.split(';')
        .map(range => {
            range = range.split('-');
            if (!range[1]) {
                range.push(range[0]);
            }

            const start = parseInt(range[0]) - 2008;
            const end = parseInt(range[1]) - 2008;

            return {
                left: (start / 12) * 100 + '%',
                width: ((end - start) / 12) * 100 + '%',
            };
        });

    return <div className="timeline-row">
        <div className="timeline-left">{title}</div>
        <div className="timeline-right">
            {ranges.map((range, key) =>
                <span key={key} style={range}/>)}
        </div>
    </div>;
}