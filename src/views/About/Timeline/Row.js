import React from 'react';

export default function Row({title, ranges}) {

    ranges = ranges.split(';')
        .map(range => {
            range = range.split('-');
            if (!range[1]) {
                range.push(range[0]);
            }

            const start = parseFloat(range[0]) - 2006;
            const end = parseFloat(range[1]) - 2006;

            return {
                left: (start / 16) * 100 + '%',
                width: ((end - start) / 16) * 100 + '%',
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